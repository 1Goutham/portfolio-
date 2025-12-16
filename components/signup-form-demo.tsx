/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import Button from "./atoms/button";
import axios from "axios";
import { FaUnlockAlt } from "react-icons/fa";
import DisclaimerIcon from "../public/assets/danger.png";
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name must be at least 1 character"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message length should be at least 2 characters"),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

type Props = {
  UserStatusActive: boolean;
};

export default function ContactSuggestionForm({ UserStatusActive }: Props) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowedCount, setAllowedCount] = useState(0);
  const [anonymousCount, setAnonymousCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const SECRET_KEY = "mz/lFqGwzGocYHUM92TG4g==";

  const encryptValue = (value: string) =>
    CryptoJS.AES.encrypt(value, SECRET_KEY).toString();

  const decryptValue = (encryptedValue: string) => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  useEffect(() => {
    const savedCount = Number(localStorage.getItem("submissionCount")) || 0;
    setAllowedCount(savedCount);
  }, []);

  const generateRandomAnonymousData = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      firstName: `Anonymous${randomId}`,
      lastName: `User${randomId}`,
      email: `anonymous${randomId}@email.com`,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalLimit = 5;
    const anonymousLimit = 2;

    const storedCount =
      Number(decryptValue(localStorage.getItem("mz/lFqGwzGocYHUM92TG4g==") || "")) || 0;

    const storedAnonymousCount =
      Number(
        decryptValue(
          localStorage.getItem("aK6yXpz6DaODC1ANor4lAkIlRBenAxfLJZUVIXtJ8Ws=") || ""
        )
      ) || 0;

    if (!isAnonymous && storedCount >= normalLimit) {
      alert("You’ve reached the maximum number of submissions.");
      return;
    }

    if (isAnonymous && storedAnonymousCount >= anonymousLimit) {
      alert("Anonymous submission limit reached.");
      return;
    }

    const submittedData = isAnonymous
      ? { ...generateRandomAnonymousData(), message: formData.message.trim() }
      : {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        };

    const result = formSchema.safeParse(submittedData);
    if (!result.success) {
      const newErrors = result.error.format();
      setErrors({
        firstName: newErrors.firstName?._errors[0],
        lastName: newErrors.lastName?._errors[0],
        email: newErrors.email?._errors[0],
        message: newErrors.message?._errors[0],
      });
      return;
    }

    setErrors({});
    setIsLoading(true);

    await axios.post(
      "https://portfolio-backend-qu7x.onrender.com/users",
      submittedData
    );

    if (isAnonymous) {
      const newAnonymousCount = storedAnonymousCount + 1;
      setAnonymousCount(newAnonymousCount);
      localStorage.setItem(
        "aK6yXpz6DaODC1ANor4lAkIlRBenAxfLJZUVIXtJ8Ws=",
        encryptValue(newAnonymousCount.toString())
      );
    } else {
      const newCount = storedCount + 1;
      setAllowedCount(newCount);
      localStorage.setItem(
        "mz/lFqGwzGocYHUM92TG4g==",
        encryptValue(newCount.toString())
      );
    }

    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setIsAnonymous(false);
    setIsLoading(false);
  };

  return (
    <div className="mx-auto mt-64 w-full max-w-4xl rounded-2xl border border-AAsecondary bg-n-8 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Contact Hariharan
        </h2>

        {!UserStatusActive && (
          <div className="group relative inline-block">
            <div className="flex w-32 cursor-pointer items-center gap-x-1 rounded-full border-2 border-AAsecondary p-2 text-AAsecondary">
              <span className="pl-1 text-sm font-medium">Disclaimer</span>
              <Image src={DisclaimerIcon} alt="Icon" width={20} />
            </div>

            <div className="invisible absolute bottom-full left-1/2 mb-3 w-72 -translate-x-1/2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-gray-900 p-4 text-sm text-gray-300 backdrop-blur">
                This portfolio backend may take a few seconds to wake up.
                If submission fails, please retry once.
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-1 text-sm text-gray-300">
        Have a question, collaboration idea, or feedback?  
        Feel free to reach out. I’ll get back to you as soon as possible.
      </p>

      <form className="my-6" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <LabelInputContainer>
            <Label className="text-white">First Name</Label>
            <Input
              name="firstName"
              placeholder="Hariharan"
              value={isAnonymous ? "" : formData.firstName}
              onChange={handleChange}
              disabled={isAnonymous}
              className="bg-stroke-1 text-white"
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label className="text-white">Last Name</Label>
            <Input
              name="lastName"
              placeholder="S"
              value={isAnonymous ? "" : formData.lastName}
              onChange={handleChange}
              disabled={isAnonymous}
              className="bg-stroke-1 text-white"
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label className="text-white">Email Address</Label>
          <Input
            name="email"
            placeholder="hariharan.s@email.com"
            value={isAnonymous ? "" : formData.email}
            onChange={handleChange}
            disabled={isAnonymous}
            className="bg-stroke-1 text-white"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="text-white">Message</Label>
          <Input
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="bg-stroke-1 text-white"
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </LabelInputContainer>

        <div className="mb-4 flex items-center">
          <label className="relative mr-3 inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            <div className="h-[27px] w-12 rounded-full bg-red-400 transition peer-checked:bg-AAsecondary" />
            <FaUnlockAlt className="absolute left-2 text-black peer-checked:hidden" />
          </label>
          <Label className="text-white">Send anonymously</Label>
        </div>

        <Button className="w-32">
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
