"use client";

import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import GithubIcon from "../../../public/Admin/GitHubIcon";
import Section from "@/components/layout/section";
import Image from "next/image";

import SpotifyImg from "../../../public/assets/spotify.jpg";
import GeminiImg from "../../../public/assets/Gemini.jpg";
import LTMImg from "../../../public/assets/LTM.jpg";
import BlogImg from "../../../public/assets/Blog_d_Prj_img.png";

import { StarsBackground } from "@/components/ui/stars-background";

export default function SomethingIveBuilt() {
  return (
    <Section
      id="project"
      className="px- flex w-full flex-col space-y-12 py-32 sm:px-16 md:px-16 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      <div data-aos="fade-up" className="-pl-10 flex flex-row items-center md:px-0 xl:-ml-24">
        <ArrowIcon className="size-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5" />
        <div className="flex-none flex-row items-center space-x-2">
          <span className="font-sans text-sm text-AAsecondary sm:text-xl">03.</span>
          <span className="w-44 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:w-56 md:text-2xl">
            Things I&apos;ve Built
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28 xl:space-y-36">

        <div data-aos="fade-up" className="md:grid-cols relative w-full md:grid md:h-96">
          <div className="absolute z-10 hidden size-full grid-cols-12 content-center py-4 md:grid">
            <div className="relative col-span-7 size-full rounded">
              <Image src={SpotifyImg} alt="Spotify Dashboard preview" className="-ml-20 rounded-xl" />
            </div>
          </div>

          <div className="size-full content-center py-12 md:absolute md:grid md:grid-cols-12">
            <div className="absolute z-0 size-full bg-opacity-70"></div>

            <div className="col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7">
              <div className="z-10 flex flex-col space-y-1 md:items-end">
                <span className="text-base text-AAsecondary">Recent Project</span>
                <span className="text-xl font-bold text-AAsecondary md:text-gray-200">
                  Spotify Streaming Dashboard
                </span>
              </div>

              <p className="text-left text-gray-300 md:text-right md:text-gray-400">
                A near real-time <span className="text-AAsecondary">Power BI</span> dashboard wired to the <span className="text-AAsecondary">Spotify API</span> to track engagement trends and playlist analytics.
              </p>

              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:justify-end md:text-gray-400">
                <span className="pr-4"><span className="text-AAsecondary">#</span> Power BI</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> DAX</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Python</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Spotify API</span>
              </ul>

              <div className="flex flex-row space-x-5 z-10">
                <GithubIcon link="https://github.com/HariharanAX/SPOTIFY-STREAMING-DASHBOARD" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12">
          <div className="absolute z-10 hidden size-full grid-cols-12 content-center py-4 md:grid">
            <div className="relative col-span-7 col-start-6 size-full rounded">
              <Image src={LTMImg} alt="ChatDB Pro preview" className="ml-20 rounded-xl" />
            </div>
          </div>

          <div className="size-full content-center py-4 md:absolute md:grid md:grid-cols-12">
            <div className="absolute z-0 size-full bg-opacity-70"></div>

            <div className="col-span-8 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 xl:col-span-6">
              <div className="z-10 flex flex-col space-y-1">
                <span className="text-base text-AAsecondary">AI SQL Chatbot</span>
                <span className="text-xl font-bold text-AAsecondary md:text-gray-200">ChatDB Pro</span>
              </div>

              <p className="text-gray-300 md:text-gray-400">
                Natural language to <span className="text-AAsecondary">SQL</span> assistant over <span className="text-AAsecondary">PostgreSQL</span> using memory, guardrails, and Gemini API.
              </p>

              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:text-gray-400">
                <span className="pr-4"><span className="text-AAsecondary">#</span> Python</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> FastAPI</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> PostgreSQL</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Gemini API</span>
              </ul>

              <div className="flex flex-row space-x-5 z-10">
                <GithubIcon link="https://github.com/HariharanAX/Chat_DB_pro" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12">
          <div className="absolute z-10 hidden size-full grid-cols-12 content-center py-4 md:grid">
            <div className="relative col-span-7 size-full rounded">
              <Image src={GeminiImg} alt="LTM Vision preview" className="-ml-20 rounded-xl" />
            </div>
          </div>

          <div className="size-full content-center py-4 md:absolute md:grid md:grid-cols-12">
            <div className="absolute z-0 size-full bg-opacity-70"></div>

            <div className="col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 md:items-end xl:col-span-6 xl:col-start-7">
              <div className="z-10 flex flex-col space-y-1 md:items-end">
                <span className="text-base text-AAsecondary">Vision Q&A</span>
                <span className="text-xl font-bold text-AAsecondary md:text-gray-200">
                  MultiPrompt Image Model
                </span>
              </div>

              <p className="text-left text-gray-300 md:text-right md:text-gray-400">
                A vision Q&A system using the <span className="text-AAsecondary">Gemini API</span> with multi-prompt logic for flexible image understanding.
              </p>

              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:justify-end md:text-gray-400">
                <span className="pr-4"><span className="text-AAsecondary">#</span> Python</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Streamlit</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Gemini API</span>
              </ul>

              <div className="flex flex-row space-x-5 z-10">
                <GithubIcon link="https://github.com/HariharanAX/MULTIPROMPT-IMAGE-MODEL" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12">
          <div className="absolute z-10 hidden size-full grid-cols-12 content-center py-4 md:grid">
            <div className="relative col-span-7 col-start-6 size-full rounded">
              <Image src={LTMImg} alt="Translation model preview" className="ml-20 rounded-xl" />
            </div>
          </div>

          <div className="size-full content-center py-4 md:absolute md:grid md:grid-cols-12">
            <div className="absolute z-0 size-full bg-opacity-70"></div>

            <div className="col-span-8 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 xl:col-span-6">
              <div className="z-10 flex flex-col space-y-1">
                <span className="text-base text-AAsecondary">Seq-to-Seq</span>
                <span className="text-xl font-bold text-AAsecondary md:text-gray-200">
                  Language Translation Model
                </span>
              </div>

              <p className="text-gray-300 md:text-gray-400">
                Real-time text translation using an encoder–decoder <span className="text-AAsecondary">LSTM</span> with attention, deployed with <span className="text-AAsecondary">Flask</span>.
              </p>

              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:text-gray-400">
                <span className="pr-4"><span className="text-AAsecondary">#</span> Python</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> TensorFlow</span>
                <span className="pr-4"><span className="text-AAsecondary">#</span> Flask</span>
              </ul>

              <div className="flex flex-row space-x-5 z-10">
                <GithubIcon link="https://github.com/HariharanAX/LANGUAGE-TRANSLATION-MODEL" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <StarsBackground />
    </Section>
  );
}
