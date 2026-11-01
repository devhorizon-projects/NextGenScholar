export type LearnerCategory = "College Student" | "Working Professional";

export type LaunchState =
  | "Draft"
  | "Interest Registration Open"
  | "Enrollment Open"
  | "Enrollment Closed"
  | "Cohort In Progress";

export interface CurriculumModule {
  id: number;
  number: string;
  topic: string;
  plannedHours: number;
  learningObjectives: string[];
  importantConcepts: string[];
  handsOnActivities: string[];
  expectedOutcomes: string[];
}

export interface CourseFAQItem {
  question: string;
  answer: string;
}

export interface IllustrativeProject {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface CourseConfiguration {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  supportingText: string;
  delivery: string;
  learningFormat: string;
  totalPlannedHours: number;
  proposedSchedule: string;
  targetAudience: string;
  instructorProfile: string;
  courseLevel: string;
  primaryCTA: string;
  secondaryCTA: string;
  launchState: LaunchState;
  
  // Public vs Internal pricing separation
  publicPricingDisplay: string;
  // Internal pricing assumptions only - NEVER to be rendered on public page
  _internalPricingAssumptions: {
    standardFee: string;
    earlyBirdFee: string;
    isApproved: boolean;
  };

  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];

  differentiators: {
    number: string;
    title: string;
    description: string;
  }[];

  audienceTracks: {
    category: LearnerCategory;
    title: string;
    description: string;
    benefits: string[];
  }[];

  curriculum: CurriculumModule[];
  learningOutcomes: string[];
  trainerModel: {
    headline: string;
    description: string;
    requirements: string[];
    placeholderNotice: string;
  };
  learningExperience: string[];
  projects: IllustrativeProject[];
  faqs: CourseFAQItem[];
}

export const AI_ENGINEERING_COURSE: CourseConfiguration = {
  id: "ai-engineering-genai",
  slug: "ai-engineering-generative-ai",
  title: "AI Engineering & Generative AI",
  tagline: "From AI Fundamentals to Production-Ready Applications",
  headline: "Don't Just Use AI. Learn to Engineer It.",
  supportingText:
    "Learn to build intelligent applications using Generative AI, large language models, retrieval-augmented generation, AI agents, and modern deployment practices—with guidance from experienced industry practitioners.",
  delivery: "100% Online",
  learningFormat:
    "Live instructor-led sessions, hands-on coding labs, guided projects, and a capstone",
  totalPlannedHours: 72,
  proposedSchedule: "8 weeks",
  targetAudience: "College students and working professionals",
  instructorProfile:
    "Industry practitioners with at least 4 years of relevant experience",
  courseLevel:
    "Beginner to Intermediate, with programming fundamentals covered at the beginning",
  primaryCTA: "Register Your Interest",
  secondaryCTA: "Explore Curriculum",
  launchState: "Interest Registration Open",

  publicPricingDisplay: "Upcoming Cohort — Register Your Interest",
  _internalPricingAssumptions: {
    standardFee: "₹29,999",
    earlyBirdFee: "₹19,999",
    isApproved: false, // Must not appear on public page until approved
  },

  highlights: [
    {
      icon: "Clock",
      title: "72 Hours of Structured Learning",
      description: "Proposed 8-week intensive path balancing theory with practical engineering.",
    },
    {
      icon: "Wifi",
      title: "100% Online, Live Learning",
      description: "Interactive instructor-led classes with guided coding labs.",
    },
    {
      icon: "Briefcase",
      title: "Industry-Led, Project-Based Training",
      description: "Instructors with 4+ years of hands-on production AI experience.",
    },
  ],

  differentiators: [
    {
      number: "01",
      title: "Learn from industry practitioners",
      description:
        "Sessions are led by practitioners with at least four years of relevant production experience who share real-world engineering constraints, edge cases, and design trade-offs.",
    },
    {
      number: "02",
      title: "Build real applications",
      description:
        "Every concept is solidified through practical coding exercises, guided laboratory assignments, and functional software development rather than passive conceptual lectures.",
    },
    {
      number: "03",
      title: "Understand the complete AI stack",
      description:
        "Progress systematically from Python foundations and LLM API integrations through advanced RAG architectures, multi-agent workflows, evaluation, and cloud deployment.",
    },
    {
      number: "04",
      title: "Focus on engineering fundamentals",
      description:
        "Learn application reliability, security best practices (prompt injection defense, guardrails), token rate-limit handling, latency mitigation, and cost awareness.",
    },
    {
      number: "05",
      title: "Build a portfolio",
      description:
        "Complete a comprehensive, production-grade capstone project with public documentation and architecture diagrams to demonstrate verifiable engineering skills.",
    },
  ],

  audienceTracks: [
    {
      category: "College Student",
      title: "For College Students & Aspiring Engineers",
      description:
        "Bridge the academic gap with cutting-edge industry practices. Build demonstrable software projects to distinguish your resume for software engineering and AI-oriented careers.",
      benefits: [
        "Strengthen your personal portfolio with deployable AI applications",
        "Master foundational Python and clean programming standards before complex AI topics",
        "Learn how real engineering teams evaluate, secure, and ship software",
        "Prepare for modern technology roles with practical, verifiable skills",
      ],
    },
    {
      category: "Working Professional",
      title: "For Working Professionals & Developers",
      description:
        "Upskill into applied Generative AI and LLM systems. Gain the architecture and implementation know-how required to design and deploy AI features in your current or future organization.",
      benefits: [
        "Master RAG architectures, embeddings, and vector databases for internal knowledge bases",
        "Design autonomous AI agents and controlled tool-calling workflows",
        "Integrate AI features seamlessly with backend APIs, authentication, and frontends",
        "Optimize operational token costs, monitoring, logging, and production reliability",
      ],
    },
  ],

  curriculum: [
    {
      id: 1,
      number: "Module 01",
      topic: "Python for AI Engineering",
      plannedHours: 6,
      learningObjectives: [
        "Master Python syntax, functional patterns, and modular project organization",
        "Configure virtual environments and manage dependencies reliably",
        "Handle JSON serialization, API requests, and asynchronous primitives",
      ],
      importantConcepts: [
        "Python data structures (lists, dicts, tuples, sets)",
        "Virtual environments (venv/pip) and packaging",
        "JSON manipulation and RESTful HTTP API consumption",
        "Asyncio basics for high-throughput AI API calls",
      ],
      handsOnActivities: [
        "Build an API client utility to fetch, parse, and transform nested JSON datasets",
        "Implement an asynchronous batch worker script to process multi-item requests",
      ],
      expectedOutcomes: [
        "Write clean, idiomatic Python code suited for downstream AI framework integrations",
      ],
    },
    {
      id: 2,
      number: "Module 02",
      topic: "AI and Machine Learning Foundations",
      plannedHours: 6,
      learningObjectives: [
        "Understand the core distinctions between symbolic AI, ML, and deep learning",
        "Differentiate supervised, unsupervised, and self-supervised paradigms",
        "Comprehend model training, loss functions, and evaluation metrics",
      ],
      importantConcepts: [
        "Features, labels, training datasets, and validation splits",
        "Classification vs. regression vs. generative tasks",
        "Evaluation metrics: Precision, Recall, F1, Accuracy, and Confusion Matrices",
        "The life cycle of machine learning models from training to inference",
      ],
      handsOnActivities: [
        "Train and evaluate a baseline tabular classifier using a standard ML dataset",
        "Perform exploratory data analysis and visualize feature correlations",
      ],
      expectedOutcomes: [
        "Articulate the fundamental mechanics of ML systems and model performance evaluation",
      ],
    },
    {
      id: 3,
      number: "Module 03",
      topic: "Deep Learning and Neural Network Fundamentals",
      plannedHours: 5,
      learningObjectives: [
        "Grasp how multi-layer perceptrons process multi-dimensional data",
        "Understand embeddings and high-dimensional semantic vector spaces",
        "Understand the Transformer architecture conceptually (self-attention mechanism)",
      ],
      importantConcepts: [
        "Neurons, activation functions, forward propagation, and backpropagation",
        "Dense vectors and cosine similarity in semantic spaces",
        "Tokens, vocabulary tokenization (BPE), and context window boundaries",
        "Transformer encoder-decoder vs. decoder-only architectures",
      ],
      handsOnActivities: [
        "Calculate and visualize semantic similarity across word and sentence embeddings",
        "Inspect tokenization behavior across diverse text inputs and languages",
      ],
      expectedOutcomes: [
        "Explain how modern foundation models represent language and interpret context limits",
      ],
    },
    {
      id: 4,
      number: "Module 04",
      topic: "Prompt Engineering and Structured Outputs",
      plannedHours: 5,
      learningObjectives: [
        "Design precise, deterministic system and user prompts for production tasks",
        "Apply few-shot learning and Chain-of-Thought (CoT) techniques",
        "Enforce structured JSON outputs and validate them against strict schemas",
      ],
      importantConcepts: [
        "Role definition, delimiters, and clear instruction formulation",
        "Few-shot exemplars and task demonstration",
        "JSON mode and JSON schema validation (Pydantic / Zod principles)",
        "Prompt regression testing and failure mode taxonomy",
      ],
      handsOnActivities: [
        "Build a multi-step structured data extraction pipeline that validates outputs against schemas",
        "Create an automated test suite comparing output consistency across prompt revisions",
      ],
      expectedOutcomes: [
        "Reliably extract, validate, and format LLM responses into structured data for software systems",
      ],
    },
    {
      id: 5,
      number: "Module 05",
      topic: "LLM APIs and Application Development",
      plannedHours: 6,
      learningObjectives: [
        "Connect software applications to leading commercial and open LLM APIs",
        "Handle streaming responses via Server-Sent Events (SSE) for low perceived latency",
        "Manage conversation state, token budgets, and graceful error handling",
      ],
      importantConcepts: [
        "API authentication, environment variables, and client initialization",
        "Streaming chunk processing and token generators",
        "Conversation history management and context window truncation strategies",
        "Rate limiting, exponential backoff retries, and token accounting",
      ],
      handsOnActivities: [
        "Build a streaming multi-turn chat interface with session history memory",
        "Implement a robust API wrapper with automatic retry policies and token usage logging",
      ],
      expectedOutcomes: [
        "Develop responsive, stateful conversational applications powered by LLM endpoints",
      ],
    },
    {
      id: 6,
      number: "Module 06",
      topic: "Retrieval-Augmented Generation (RAG)",
      plannedHours: 10,
      learningObjectives: [
        "Understand why RAG is essential to prevent hallucinations and access private data",
        "Implement document parsing, chunking, and embedding pipelines",
        "Query vector databases and synthesize grounded responses with citations",
      ],
      importantConcepts: [
        "Text extraction (PDFs, Markdown, HTML) and preprocessing",
        "Chunking strategies: fixed size, sliding window, and semantic boundary chunking",
        "Vector search: k-Nearest Neighbors (k-NN), Approximate Nearest Neighbors (ANN), and HNSW",
        "Context synthesis, prompt stuffing, source citation, and retrieval grounding",
      ],
      handsOnActivities: [
        "Build an end-to-end document question-answering application over multi-page PDF documents",
        "Experiment with chunk size variations and benchmark retrieval precision on real queries",
      ],
      expectedOutcomes: [
        "Architect and implement production-ready RAG workflows connecting LLMs to external documents",
      ],
    },
    {
      id: 7,
      number: "Module 07",
      topic: "AI Agents and Tool Calling",
      plannedHours: 8,
      learningObjectives: [
        "Understand autonomous agent architecture and ReAct (Reason + Act) loops",
        "Configure models to call external tools, APIs, and computational functions",
        "Incorporate state management, guardrails, and human-in-the-loop approvals",
      ],
      importantConcepts: [
        "Function/tool calling definitions and tool execution loops",
        "Multi-step reasoning and dynamic planning",
        "Stateful agent orchestration and memory checkpoints",
        "Security boundaries, permissions, and human approval gates for critical actions",
      ],
      handsOnActivities: [
        "Build a controlled AI assistant capable of searching documentation, running calculations, and querying an API",
        "Implement a human-in-the-loop confirmation gate before executing state-changing operations",
      ],
      expectedOutcomes: [
        "Build deterministic, reliable AI agents that safely interface with external software tools",
      ],
    },
    {
      id: 8,
      number: "Module 08",
      topic: "Backend Development and User Interface Integration",
      plannedHours: 6,
      learningObjectives: [
        "Design production RESTful API endpoints for asynchronous AI services",
        "Connect an AI backend service to a clean, responsive web user interface",
        "Implement authentication, session isolation, and input validation",
      ],
      importantConcepts: [
        "FastAPI / Express API design for AI workloads",
        "CORS, authentication tokens, and user session management",
        "Request sanitization and schema validation",
        "WebSocket vs. Server-Sent Events (SSE) streaming to modern frontend clients",
      ],
      handsOnActivities: [
        "Develop a complete full-stack web interface connected to an AI backend pipeline",
        "Implement real-time token streaming and status loaders in the UI",
      ],
      expectedOutcomes: [
        "Bridge AI backend functionality with user-facing interfaces into a coherent web product",
      ],
    },
    {
      id: 9,
      number: "Module 09",
      topic: "AI Evaluation, Safety, and Security",
      plannedHours: 6,
      learningObjectives: [
        "Systematically evaluate generated answers for groundedness, relevance, and safety",
        "Detect and prevent prompt injection, jailbreaks, and sensitive data leakage",
        "Establish automated test datasets and evaluation benchmarks",
      ],
      importantConcepts: [
        "LLM-as-a-judge evaluation frameworks and automated rubrics",
        "Groundedness, faithfulness, and answer relevance scoring",
        "Security threats: Direct prompt injection, indirect prompt injection, and PII leakage",
        "Input/output guardrails and content moderation filters",
      ],
      handsOnActivities: [
        "Build an evaluation suite that tests a RAG pipeline against a golden question-answer dataset",
        "Implement defensive input sanitization and guardrail checks to block prompt injection attempts",
      ],
      expectedOutcomes: [
        "Apply testing, security hardening, and objective evaluation to AI applications",
      ],
    },
    {
      id: 10,
      number: "Module 10",
      topic: "Deployment, Monitoring, and Cost Optimization",
      plannedHours: 6,
      learningObjectives: [
        "Containerize AI applications with Docker and configure environment secrets",
        "Deploy applications to cloud platforms with observability and health checks",
        "Monitor latency, error rates, and optimize operational token expenditure",
      ],
      importantConcepts: [
        "Docker containerization, multi-stage builds, and environment configuration",
        "Application telemetry, logging, structured tracing, and request IDs",
        "Token usage tracking, caching strategies, and smaller model distillation trade-offs",
        "Pre-deployment checklists and production readiness reviews",
      ],
      handsOnActivities: [
        "Containerize an AI backend and deploy it to a live cloud host",
        "Configure centralized logging and calculate estimated token costs under varying query volumes",
      ],
      expectedOutcomes: [
        "Deploy, monitor, and cost-optimize live AI applications for production reliability",
      ],
    },
    {
      id: 11,
      number: "Module 11",
      topic: "Capstone Project",
      plannedHours: 8,
      learningObjectives: [
        "Select and scope an end-to-end real-world industry problem",
        "Design the complete system architecture incorporating RAG, tools, or agents",
        "Build, test, deploy, and document a working, portfolio-ready application",
      ],
      importantConcepts: [
        "System architecture specification and component trade-offs",
        "Integration of all program modules into a unified product",
        "Documentation, README architecture diagrams, and demonstration preparation",
        "Peer review and constructive architectural critique",
      ],
      handsOnActivities: [
        "Execute the end-to-end development of an approved capstone project",
        "Present the live application, explain architectural choices, and deliver documentation",
      ],
      expectedOutcomes: [
        "Demonstrate practical competence through a deployed, fully documented AI software system",
      ],
    },
  ],

  learningOutcomes: [
    "Explain core AI, machine learning, and LLM concepts with clarity and technical precision.",
    "Develop reliable applications that integrate commercial and open-source LLM APIs.",
    "Build production-grade RAG-based applications over diverse external document collections.",
    "Implement controlled tool-calling workflows and autonomous, stateful AI agents.",
    "Integrate AI features seamlessly with backend APIs, authentication, and user interfaces.",
    "Apply evaluation frameworks, security hardening, and reliability practices to AI systems.",
    "Deploy practical AI applications to the cloud and proactively monitor and manage operational costs.",
    "Present and defend a complete capstone project supported by professional architectural documentation.",
  ],

  trainerModel: {
    headline: "Learn from People Who Build in the Industry.",
    description:
      "Next Gen Scholars brings experienced practitioners into the classroom, connecting structured learning with real-world engineering practices, design decisions, and implementation challenges.",
    requirements: [
      "Minimum 4 years of relevant industry experience in software engineering and applied AI",
      "Demonstrable experience architecting, deploying, or managing AI systems in production",
      "Practical teaching based on real engineering problems and production constraints",
      "Hands-on coding instruction and constructive, actionable project feedback",
      "Clear, transparent explanations of system trade-offs and architectural decisions",
    ],
    placeholderNotice:
      "Instructor profiles will be announced as cohorts are finalized. All instructors are verified industry practitioners with at least 4 years of relevant software and AI experience.",
  },

  learningExperience: [
    "Live online instructor-led sessions covering architecture and implementation",
    "Guided hands-on coding labs following every core conceptual topic",
    "Practical assignments and exercises designed around real industry challenges",
    "Curated access to learning materials, reference architectures, and code repositories",
    "Dedicated capstone project development with iterative milestone checkpoints",
    "Structured code reviews and constructive feedback from instructors and peers",
    "Session recordings provided subject to final operational course policy",
  ],

  projects: [
    {
      id: "proj-rag-assistant",
      title: "AI-Powered Document Assistant Using RAG",
      category: "Retrieval-Augmented Generation",
      description:
        "Ingests technical manuals, policy documents, or financial reports into a vector database, enabling precise question-answering with verifiable source citations.",
      deliverables: [
        "Multi-format document ingestion pipeline",
        "Vector database indexing with chunk optimization",
        "Grounded response generation with inline citation references",
      ],
      technologies: ["Python", "Vector Databases", "Embeddings", "LLM APIs"],
    },
    {
      id: "proj-agent-support",
      title: "Intelligent Support Assistant with Tool Calling",
      category: "Autonomous Agents",
      description:
        "An automated customer or operational assistant that interprets user requests, queries database APIs, executes calculations, and requests human approval for sensitive actions.",
      deliverables: [
        "Multi-step tool calling loop with schema validation",
        "Stateful conversation memory across sessions",
        "Human-in-the-loop approval mechanism for transactions",
      ],
      technologies: ["Tool Calling", "Agent Workflows", "API Integration", "State Management"],
    },
    {
      id: "proj-knowledge-search",
      title: "AI-Powered Enterprise Knowledge Search",
      category: "Search & Synthesis",
      description:
        "A hybrid search engine combining keyword filtering with dense semantic embeddings to summarize complex knowledge bases into concise, actionable briefs.",
      deliverables: [
        "Hybrid search pipeline combining keyword and dense vector retrieval",
        "Automated summary generation with query relevance scoring",
        "Interactive search interface with real-time streaming",
      ],
      technologies: ["Hybrid Search", "Vector Embeddings", "FastAPI / Next.js", "Evaluation"],
    },
    {
      id: "proj-research-assistant",
      title: "Domain-Specific Productivity & Research Assistant",
      category: "Applied Productivity",
      description:
        "A tailored workflow assistant designed for legal, healthcare, or financial analysts to parse complex text, extract structured tables, and draft summaries.",
      deliverables: [
        "Pydantic-validated structured data extraction pipeline",
        "Input sanitization and prompt injection security filters",
        "Token tracking and cost estimation dashboard",
      ],
      technologies: ["Structured Outputs", "Prompt Engineering", "Security Filters", "Docker"],
    },
  ],

  faqs: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The course is designed for beginner to intermediate learners. It begins with Module 1 covering Python for AI Engineering, ensuring learners have the required programming fundamentals before advancing to machine learning, LLMs, and RAG architectures.",
    },
    {
      question: "Can working professionals attend?",
      answer:
        "Yes. The 72-hour planned learning curriculum is structured over an 8-week proposed schedule with live online sessions designed to accommodate the schedules of working developers and full-time college students.",
    },
    {
      question: "Is the program completely online?",
      answer:
        "Yes, the program is 100% online. It features live instructor-led sessions, cloud-based coding laboratories, and online capstone reviews.",
    },
    {
      question: "Do I need prior AI or machine learning experience?",
      answer:
        "No prior AI experience is required. Basic familiarity with general programming concepts is helpful, but foundational Python, AI, and ML principles are systematically taught in the initial modules.",
    },
    {
      question: "What programming knowledge is required?",
      answer:
        "Basic familiarity with programming logic (variables, loops, conditions) in any modern language is recommended. Module 1 focuses directly on Python syntax, virtual environments, APIs, and JSON manipulation.",
    },
    {
      question: "Will I build a real-world project?",
      answer:
        "Yes. The program is heavily project-based. Beyond coding exercises in every module, you will design, build, test, and document an end-to-end Capstone Project that can be presented in your professional portfolio.",
    },
    {
      question: "Who will teach the sessions?",
      answer:
        "All sessions are led by industry practitioners with at least 4 years of relevant software engineering and production AI experience. Specific trainer profiles for upcoming cohorts will be announced prior to cohort launch.",
    },
    {
      question: "What is the course duration?",
      answer:
        "The course has a planned total learning duration of 72 hours across 11 modules, proposed to be delivered across an 8-week schedule.",
    },
    {
      question: "When will the next batch begin?",
      answer:
        "Batch dates and cohort schedules will be announced before enrollment opens. Register your interest to receive early notifications on dates and application deadlines.",
    },
    {
      question: "What is the course fee?",
      answer:
        "Official course fees and payment options will be announced when enrollment opens for the upcoming cohort. Register your interest today to receive updates and any priority enrollment privileges.",
    },
  ],
};
