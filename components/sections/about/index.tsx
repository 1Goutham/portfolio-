"use client";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import Section from "@/components/layout/section";
import { StarsBackground } from "@/components/ui/stars-background";
import { hari } from "../../content/hari";

export default function AboutMe() {
  // Tech stack: prefer content file, fall back to sensible defaults
  const techFromContent =
    (hari as any)?.tech ||
      [
        ["Python", "SQL", "Excel", "Pandas", "NumPy"],
        ["Scikit-learn", "TensorFlow / Keras", "NLP", "RAG", "Agentic AI"],
      ];

  // Maintain your two-column tech grid shape
  const technologies: string[][] = [
    techFromContent[0] || ["Python", "Power BI", "DAX", "Power Query"],
    techFromContent[1] || ["PostgreSQL", "FastAPI", "Streamlit", "Docker"],
  ];

  // Paragraphs from content; graceful defaults if content is missing
 const paragraphs =
  [
    "I’m a Data Scientist & Machine Learning Engineer working across data science, machine learning, deep learning, NLP, and generative AI. I build intelligent systems that analyse data, automate decision-making, and deliver actionable insights.",
    "My experience spans end-to-end data and ML workflows, from SQL-based data extraction and Python-driven analysis to Power BI dashboards and production-ready ML deployment. I work with classical ML, deep learning, transformers, LLMs, RAG pipelines, GANs, and LangChain to create scalable AI solutions that stay simple for users."
  ];


  return (
    <Section
      id="about"
      className="flex flex-col items-start sm:pl-4 md:pl-8 lg:pl-12 xl:pl-48 py-32"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex w-full flex-col px-4 sm:w-[500px] sm:px-0 
        md:w-[700px] lg:w-[1000px]"
      >
<div className="flex w-full items-baseline pb-10">
  <div className="flex items-baseline whitespace-nowrap">
    <ArrowIcon className="mr-2 size-4 flex-none text-AAsecondary md:h-6 md:w-5" />
    <span className="font-Header text-sm text-AAsecondary sm:text-xl">
      01.
    </span>
    <span className="ml-4 text-lg font-bold tracking-wider text-gray-200 opacity-85 sm:text-2xl">
      {hari?.about?.heading ?? "About Me"}
    </span>
  </div>

  <div className="ml-6 mt-[0.35em] h-px flex-grow bg-gray-400/60" />
</div>



        {/* // ? Paragraphs */}
        <div className="flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full space-y-4 text-sm sm:text-base">
            {/* Intro line with name + tagline */}
            <div className="font-Header">
              <span className="text-gray-400">
                Hello! My name is{" "}
                <span className="text-AAsecondary">
                  {hari?.name ?? "Hariharan S"}
                </span>
                {hari?.tagline
                  ? ` — ${hari.tagline}`
                  : " and I enjoy building smart systems that automate tasks, uncover insights, and make decision-making easier for everyone."}
              </span>
            </div>

            {/* Body paragraphs from content */}
            {paragraphs.map((p, i) => (
              <div key={i} className="font-Header">
                <span className="text-gray-400">{p}</span>
              </div>
            ))}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400">
                Here are a few technologies I’ve been working with recently:
              </span>
            </div>

            <div className="font-Header flex flex-row space-x-16 tracking-wide">
              {/* Column 1 */}
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[0].map((tech, index) => (
                    <div
                      key={`col1-${index}`}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className="size-3 text-AAsecondary" />
                      <span className="text-xs text-gray-400 sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[1].map((tech, index) => (
                    <div
                      key={`col2-${index}`}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className="size-3 text-AAsecondary" />
                      <span className="text-xs text-gray-400 sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StarsBackground />
    </Section>
  );
}
