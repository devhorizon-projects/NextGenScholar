export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  level: "Beginner to Intermediate" | "Beginner to Advanced" | "Intermediate to Pro" | "Advanced Mastery";
  category: string;
  description: string;
  modules: string[];
  skills: string[];
  keyOutcome: string;
  iconName: string;
  badge?: string;
}

export interface TechMentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  image: string;
  bio: string;
}

export interface StudentStory {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  avatar: string;
  achievement: string;
}

export const BRAND_INFO = {
  name: "NextGen Scholars",
  tagline: "Learn today • Lead tomorrow",
  subheading:
    "Empowering the next generation of technologists through practical, project-driven learning, comprehensive skill grooming, and real-world tech contribution.",
  contactEmail: "contact@nextgenscholar.org",
  headquarters: "Global Tech Hubs & Online",
};

export const MOCK_COURSES: CourseItem[] = [
  {
    id: "course-ai-genai",
    title: "AI Engineering & Generative AI",
    duration: "8 Weeks • 72 Planned Hours",
    level: "Beginner to Intermediate",
    category: "Artificial Intelligence",
    description:
      "Master the engineering of foundation models, multi-agent workflows, Retrieval-Augmented Generation (RAG), and deploy enterprise-grade AI applications with guidance from experienced industry practitioners.",
    modules: [
      "Python for AI Engineering",
      "AI and Machine Learning Foundations",
      "Deep Learning and Neural Network Fundamentals",
      "Prompt Engineering and Structured Outputs",
      "LLM APIs and Application Development",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents and Tool Calling",
      "Backend Development and UI Integration",
      "AI Evaluation, Safety, and Security",
      "Deployment, Monitoring, and Cost Optimization",
      "Capstone Project",
    ],
    skills: ["Generative AI", "Python", "RAG Systems", "Vector Databases", "AI Agents", "FastAPI", "Evaluation", "Docker & Cloud MLOps"],
    keyOutcome: "Architect, build, and deploy an end-to-end production AI capstone project",
    iconName: "Cpu",
    badge: "Flagship Program",
  },
];

export const MOCK_MENTORS: TechMentor[] = [
  {
    id: "m-1",
    name: "Alex Rivera",
    role: "Staff AI Engineer",
    company: "Ex-Google DeepMind / Frontier Labs",
    expertise: ["Large Language Models", "Agentic Systems", "MLOps"],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Pioneering LLM infrastructure and multi-agent platforms. Dedicated to training the next generation of applied AI engineers.",
  },
  {
    id: "m-2",
    name: "Vikram Sengupta",
    role: "Principal Systems Architect",
    company: "Enterprise Cloud Systems",
    expertise: ["Distributed Microservices", "FastAPI", "Vector Search"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Over 14 years scaling backend systems and cloud APIs handling millions of daily active AI requests.",
  },
  {
    id: "m-3",
    name: "Kira Thorne",
    role: "AI Security & Evaluation Lead",
    company: "Cyber Defense Vanguard",
    expertise: ["Prompt Injections", "AI Guardrails", "Evaluation Benchmarks"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specialized in AI security hardening, adversarial testing, and building automated evaluation harnesses.",
  },
];

export const MOCK_STUDENT_STORIES: StudentStory[] = [
  {
    id: "story-1",
    name: "Marcus Chen",
    role: "Applied AI Engineer",
    course: "AI Engineering & Generative AI",
    quote:
      "The project-based curriculum changed everything. I stopped watching endless tutorials and started building real systems with automated evaluation, Docker, and scalable RAG pipelines.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    achievement: "Shipped open-source RAG evaluation tool with 2,500+ stars",
  },
  {
    id: "story-2",
    name: "Sophia Martinez",
    role: "AI Application Developer",
    course: "AI Engineering & Generative AI",
    quote:
      "Learning how to design multi-agent workflows and optimize vector retrieval gave me the practical confidence to architect generative AI features at my company.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    achievement: "Built production AI customer assistant handling 40k queries/day",
  },
  {
    id: "story-3",
    name: "David Kim",
    role: "AI Platform Engineer",
    course: "AI Engineering & Generative AI",
    quote:
      "The focus on production AI deployment and guardrails is unprecedented. We learned to secure LLM endpoints against prompt injection and optimize latency and token costs.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    achievement: "Deployed live multi-tenant AI search engine in production",
  },
];

export const FAQS = [
  {
    q: "What makes NextGen Scholars different from traditional coding bootcamps?",
    a: "NextGen Scholars focuses on grooming practical, high-impact skills required in modern engineering teams. Rather than passive lectures, every learner builds production-grade software, receives direct feedback from senior industry engineers, and contributes actively to real-world tech solutions.",
  },
  {
    q: "Is this course suitable for beginners?",
    a: "Yes. Our AI Engineering & Generative AI program starts with Python for AI Engineering, ensuring learners have the required programming and API fundamentals before advancing to machine learning, LLMs, and RAG architectures.",
  },
  {
    q: "What does 'Learn today • Lead tomorrow' mean in practice?",
    a: "It represents our core philosophy: gaining master-level technical mastery today so you can lead tech initiatives, launch products, architect robust systems, and mentor others tomorrow.",
  },
  {
    q: "Do students work on real-world projects?",
    a: "Yes. 100% of the curriculum revolves around building, reviewing, deploying, and maintaining real software. You will complete your course with a public, battle-tested portfolio.",
  },
];
