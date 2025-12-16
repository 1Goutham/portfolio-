export const hari = {
  name: "Hariharan S",
  role: "Data Science • Machine Learning • AI",
  tagline:
    "I use Data Science, Machine Learning, and AI to turn data into solutions.",
  shortIntro:
    "I enjoy building smart systems that automate tasks, uncover insights, and make decision-making easier for everyone.",

  about: {
    heading: "About Me",
    body: [
      "I work across data science, machine learning, deep learning, and generative AI to solve problems using data. I like understanding how things work, finding patterns, and building systems that can learn from experience.",
      "My focus is on creating tools that feel simple on the outside but use smart models in the background. Whether it’s analysing data, predicting outcomes, or building AI that can understand and respond to natural language, I enjoy working end-to-end and making everything easy for the user.",
      "I’m continuously exploring new ideas in AI and always building something that pushes me a bit further than yesterday."
    ]
  },

  projects: [
    {
      title: "Spotify Streaming Dashboard",
      badge: "Recent Project",
      summary:
        "A near real-time Power BI dashboard connected to the Spotify Developer API, tracking user engagement, playlist insights, and streaming patterns with rapid data freshness. Built to surface clear KPIs and fast-moving trends.",
      tech: ["Power BI", "DAX", "Power Query", "Python", "Spotify API"],
      highlights: [
        "Direct API ingestion for fresh metrics",
        "KPI cards + trend visuals for quick decisions",
        "Parameterised filters for playlists, artists, and time windows"
      ],
      links: {
        demo: "", // add if available
        repo: ""  // add if available
      }
    },
    {
      title: "ChatDB Pro",
      badge: "Recent Project",
      summary:
        "An AI-powered SQL chatbot for PostgreSQL that answers natural-language questions by generating accurate SQL and returning instant results. Uses session memory, fallback logic, and prompt-guardrails to reduce SQL errors.",
      tech: ["Python", "PostgreSQL", "Gemini Pro API", "FastAPI", "Streamlit"],
      highlights: [
        "Session memory + retries for reliable answers",
        "SQL safety checks before execution",
        "Inline table + chart responses"
      ],
      links: {
        demo: "",
        repo: ""
      }
    },
    {
      title: "MultiPrompt Image Model",
      badge: "Recent Project",
      summary:
        "A personalised image question-answering system using the Gemini Pro API. Handles multi-domain queries with zero-shot prompting and a UI for custom prompt templates.",
      tech: ["Python", "Gemini Pro API", "Streamlit"],
      highlights: [
        "Zero-shot prompting across domains",
        "Prompt presets for repeatable accuracy",
        "Batch Q&A for image sets"
      ],
      links: {
        demo: "",
        repo: ""
      }
    },
    {
      title: "Language Translation Model",
      badge: "Project",
      summary:
        "Real-time text translation using an encoder–decoder LSTM. Supports 5+ language pairs with solid context handling and performance optimisations.",
      tech: ["Python", "TensorFlow", "Flask", "JavaScript"],
      highlights: [
        "Encoder–decoder LSTM with attention (optional)",
        "Low-latency API with Flask",
        "Memory-efficient batching"
      ],
      links: {
        demo: "",
        repo: ""
      }
    }
  ],

  experience: [
    {
      company: "Global Knowledge",
      role: "AI/ML Intern",
      location: "Coimbatore, India",
      dates: "Dec 2023 – Jan 2024",
      bullets: [
        "Cleaned, organised, and prepared real datasets for analysis.",
        "Performed EDA and built visuals to uncover trends and patterns.",
        "Prototyped ML/DL/NLP models and improved their performance.",
        "Explored Generative AI tooling in small practical projects.",
        "Streamlined data workflows to deliver clearer insights."
      ]
    }
  ],

  certifications: [
    {
      name: "1 Million Prompters Initiative — UAE",
      details:
        "Certified in Prompt Engineering and Generative AI; practical skills in LLMs, structured prompting, and AI-driven problem-solving."
    },
    {
      name: "Google Advanced Data Analytics Professional Certificate",
      details:
        "Advanced training in data analysis, statistics, predictive modelling, and business problem-solving using Python, SQL, and analytical techniques."
    }
  ]
} as const;
