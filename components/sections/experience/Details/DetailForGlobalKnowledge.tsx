"use client";
import React from "react";
import ArrowIcon from "../../../../public/Admin/Arrow";

export default function DetailForGlobalKnowledge() {
  const tasks = [
    {
      text: "Cleaned, organised, and prepared real datasets for analysis, enabling reliable downstream modelling and clearer insights.",
      keywords: ["Cleaned", "organised", "datasets", "analysis", "modelling"],
    },
    {
      text: "Performed EDA and built visualisations to uncover trends, correlations, and actionable patterns.",
      keywords: ["EDA", "visualisations", "trends", "patterns"],
    },
    {
      text: "Prototyped ML, DL, and NLP models and iteratively improved performance through tuning and validation.",
      keywords: ["ML", "DL", "NLP", "performance", "validation"],
    },
    {
      text: "Explored Generative AI tools and applied them in small practical projects to automate workflows and accelerate analysis.",
      keywords: ["Generative AI", "automation", "workflows", "analysis"],
    },
    {
      text: "Helped optimise data workflows, improving clarity, speed, and usability for project teams and stakeholders.",
      keywords: ["workflows", "optimise", "data", "stakeholders"],
    },
  ];

  return (
    <div className="flex max-w-xl flex-col space-y-5 px-4 md:px-0">
      <div className="space-y-2 flex flex-col">
        {/* Title */}
        <span className="font-Arimo text-sm tracking-wide text-gray-100 sm:text-lg">
          AI/ML Intern <span className="text-AAsecondary">- Global Knowledge</span>
        </span>

        {/* Dates */}
        <span className="font-mono text-xs text-gray-500">
          Dec 2023 – Jan 2024 · Coimbatore, India
        </span>
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

/* Local keyword highlighter */
const getTasksTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
  if (keyword.length > 0) {
    const escaped = keyword.map(k =>
      k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(escaped.join("|"), "gi");
    return text.replace(
      regex,
      match => `<span class="text-AAsecondary">${match}</span>`
    );
  }
  return text;
};
