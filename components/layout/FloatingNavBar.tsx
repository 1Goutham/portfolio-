"use client";
import React from "react";
import { FloatingNav } from "../ui/FloatingNav";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "https://www.linkedin.com/in/hariharan-s-699b58220/",
      icon: <FaLinkedin className="size-4 text-white hover:text-color-AAsecondary" />,
    },
    {
      name: "About",
      link: "https://github.com/HariharanAX",
      icon: <FaGithub className="size-4 text-white hover:text-color-AAsecondary" />,
    },
    {
      name: "Contact",
      link: "https://leetcode.com/u/HARIHARAN_18/",
      icon: <SiLeetcode className="size-4 text-white hover:text-color-AAsecondary" />,
    },
  ];

  return (
    <div className="hidden lg:block">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
