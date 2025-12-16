"use client";
import React from "react";
import ArrowIcon from "../../../../public/Admin/Arrow";

export default function Details() {
  const tasks = [
    {
      text: "Built ChatDB Pro - an AI-powered SQL chatbot for PostgreSQL that turns natural language into accurate SQL and returns instant results.",
      keywords: ["ChatDB Pro", "AI-powered", "SQL", "PostgreSQL", "natural language"],
    },
    {
      text: "Developed a MultiPrompt Image Q&A system using the Gemini Pro API with zero-shot prompting and a customisable prompt interface.",
      keywords: ["MultiPrompt", "Image", "Gemini Pro API", "zero-shot", "prompt"],
    },
    {
      text: "Created a Spotify Streaming Dashboard in Power BI by connecting to the Spotify Developer API to surface KPIs and near real-time trends.",
      keywords: ["Spotify", "Power BI", "Spotify Developer API", "dashboard", "KPI"],
    },
    {
      text: "Implemented a low-latency Language Translation Model using an encoder–decoder LSTM with a Flask API and lightweight front-end.",
      keywords: ["Language Translation", "LSTM", "Flask", "encoder–decoder"],
    },
  ];

  return (
    <div className="flex max-w-xl flex-col space-y-5 px-4 md:px-0">
      <div className="spacey-y-2 flex flex-col">
        {/* Title */}
        <span className="font-Arimo text-sm tracking-wide text-gray-100 sm:text-lg">
          Freelance Data/ML Engineer{" "}
          <span className="text-AAsecondary">- Selected Projects</span>
        </span>

        {/* Date */}
        <span className="font-mono text-xs text-gray-500">2024 – Present</span>
      </div>

      <div className="flex flex-col space-y-4 text-xs sm:text-sm">
        {tasks.map((item, index) => (
          <div key={index} className="flex flex-row space-x-1">
            <ArrowIcon className="h-5 w-4 flex-none text-AAsecondary" />
            <span
              className="text-xs text-gray-500 sm:text-sm"
              dangerouslySetInnerHTML={{
                __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔥 Local utility — NO imports required */
const getTasksTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
  if (!keyword || keyword.length === 0) return text;

  const escaped = keyword.map(k =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(escaped.join("|"), "gi");

  return text.replace(
    regex,
    match => `<span class="text-AAsecondary">${match}</span>`
  );
};
