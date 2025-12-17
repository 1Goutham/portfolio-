"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/FlipWords";
import Image from "next/image";
import HandWavingIcon from "../../public/HandWavingIcon.png";
import Button from "../atoms/button";

export const RevealLinks = () => {
  const words: string[] = [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Developer"
  ];

  return (
    <>
      <div className="w-full">
        <div className="rounded-full p-0.5">
          <div className="flex flex-row items-center gap-x-3 font-grotesk text-white">
            <div className="flex w-12 justify-center rounded-xl bg-color-AAsecondary p-[2px]">
              <Image src={HandWavingIcon} alt="Icon" className="w-7" />
            </div>
            <h1 className="cursor-default text-xl text-color-AAsecondary">
              Hi, I am
            </h1>
          </div>
        </div>

        <section className="flex flex-row gap-x-3 text-white">
          <div className="flex flex-row items-center">
            <FlipLink href="#">H</FlipLink>
            <FlipLink href="#">a</FlipLink>
            <FlipLink href="#">r</FlipLink>
            <FlipLink href="#">i</FlipLink>
            <FlipLink href="#">h</FlipLink>
            <FlipLink href="#">a</FlipLink>
            <FlipLink href="#">r</FlipLink>
            <FlipLink href="#">a</FlipLink>
            <FlipLink href="#">n</FlipLink>
          </div>
          <FlipLink href="#">S</FlipLink>
        </section>

        <div className="cursor-default">
          <FlipWords words={words} />
        </div>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 0.7, ease: "easeOut" },
            y: { duration: 0.7, ease: "easeOut" }
          }}
          className="sm:text-md mt-10 text-sm tracking-wider text-gray-400 md:text-lg"
        >
          I’m an <span className="text-color-AAsecondary font-bold">AI & Machine Learning Engineer</span> working across <span className="text-color-AAsecondary font-bold">data science</span>, <span className="text-color-AAsecondary font-bold">deep learning</span>, <span className="text-color-AAsecondary font-bold">NLP</span> and <span className="text-color-AAsecondary font-bold">generative AI</span>. I build intelligent systems that analyse data, automate tasks and deliver practical insights. My experience spans <span className="text-color-AAsecondary font-bold">end to end ML pipelines</span> with expertise in <span className="text-color-AAsecondary font-bold">transformers</span>, <span className="text-color-AAsecondary font-bold">LSTMs</span>, <span className="text-color-AAsecondary font-bold">RAG</span>, <span className="text-color-AAsecondary font-bold">GANs</span> and <span className="text-color-AAsecondary font-bold">LangChain</span>. I enjoy creating <span className="text-color-AAsecondary font-bold">real world AI solutions</span> that feel simple for users but are powered by sophisticated models underneath.
        </motion.h3>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: { duration: 2, ease: "easeOut" }
          }}
          className="mt-6"
        >
          <a href={"/HARIHARAN_SELVAM.pdf"} target="_blank" rel="noreferrer">
            <Button className="block p-4">Check out my resume !</Button>
          </a>
        </motion.div>
      </div>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string; href: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="font-FontNormal1 relative block w-fit cursor-pointer overflow-hidden whitespace-nowrap text-4xl font-black leading-loose sm:text-3xl md:text-3xl lg:text-6xl"
      style={{ lineHeight: 1.5 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-104%" }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
