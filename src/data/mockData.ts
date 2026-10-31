export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  level: "Beginner to Advanced" | "Intermediate to Pro" | "Advanced Mastery";
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
    title: "AI Engineering and Generative AI",
    duration: "16 Weeks • Project Intensive",
    level: "Intermediate to Pro",
    category: "Artificial Intelligence",
    description:
      "Master the engineering of foundation models, multi-agent workflows, Retrieval-Augmented Generation (RAG), parameter-efficient fine-tuning (PEFT), and deploy enterprise-grade AI applications.",
    modules: [
      "Foundations of Modern Deep Learning & Transformers",
      "LLM Engineering, Advanced Prompting & Function Calling",
      "Production RAG Pipelines & Vector Databases (Milvus, Pinecone)",
      "Autonomous AI Agents (LangGraph, CrewAI, AutoGen)",
      "Fine-Tuning Open Source LLMs (LoRA, QLoRA, Axolotl)",
      "Deploying Scalable AI Services & High-Throughput Inference",
    ],
    skills: ["Generative AI", "PyTorch", "LangChain", "RAG Systems", "Multi-Agent AI", "vLLM"],
    keyOutcome: "Build & ship 4 production-ready Generative AI systems",
    iconName: "Cpu",
    badge: "Most Popular",
  },
  {
    id: "course-fullstack",
    title: "Full Stack Development",
    duration: "16 Weeks • Production Grade",
    level: "Beginner to Advanced",
    category: "Software Engineering",
    description:
      "Craft modern, enterprise-scale web applications from scratch. Deep dive into reactive frontend interfaces, resilient backend microservices, real-time architectures, and cloud-native deployments.",
    modules: [
      "Modern React 19, Next.js App Router & TypeScript Mastery",
      "State Machines, Server Components & Performance Optimization",
      "Distributed Backend APIs with Node.js, Go & GraphQL",
      "PostgreSQL, Prisma ORM, Redis Caching & DB Indexing",
      "Docker, Kubernetes, Cloud Infrastructure & CI/CD Pipelines",
      "Event-Driven Architectures with Kafka & WebSockets",
    ],
    skills: ["React & Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker & K8s", "System Design"],
    keyOutcome: "Architect 3 scalable full-stack platforms with CI/CD",
    iconName: "Layers",
    badge: "Industry Essential",
  },
  {
    id: "course-cybersec-ai",
    title: "Cyber Security and Ethical Hacking using AI",
    duration: "14 Weeks • Hands-on Labs",
    level: "Advanced Mastery",
    category: "Information Security",
    description:
      "Harness the power of AI to identify attack surfaces, conduct ethical penetration testing, automate vulnerability assessment, and engineer proactive security defenses against autonomous cyber threats.",
    modules: [
      "Offensive Security Foundations & Network Penetration Testing",
      "AI-Powered Threat Detection & Behavioral Anomaly Analytics",
      "Web Application Security, OWASP Top 10 & API Exploitation",
      "LLM Security: Prompt Injections, Jailbreaking & Model Poisoning Defense",
      "Automated Incident Response & DevSecOps Security Pipelines",
      "Zero Trust Architecture & Cryptographic Integrity",
    ],
    skills: ["Ethical Hacking", "AI Threat Detection", "Penetration Testing", "LLM Security", "DevSecOps", "Zero Trust"],
    keyOutcome: "Conduct live authorized audits & build AI defense monitors",
    iconName: "Shield",
    badge: "Cutting-Edge",
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
    expertise: ["Distributed Microservices", "Next.js", "High-Load DBs"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Over 14 years scaling backend systems and web applications handling millions of daily active users.",
  },
  {
    id: "m-3",
    name: "Kira Thorne",
    role: "Chief Information Security Officer & Red Teamer",
    company: "Cyber Defense Vanguard",
    expertise: ["Penetration Testing", "AI Attack Vectors", "Zero Trust"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specialized in ethical hacking and building automated AI-driven defenses against sophisticated cyber incursions.",
  },
];

export const MOCK_STUDENT_STORIES: StudentStory[] = [
  {
    id: "story-1",
    name: "Marcus Chen",
    role: "Full Stack Engineer",
    course: "Full Stack Development",
    quote:
      "The project-based curriculum changed everything. I stopped watching endless tutorials and started building real systems with automated tests, Docker, and scalable backends.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    achievement: "Shipped open-source dev tool with 3,000+ stars",
  },
  {
    id: "story-2",
    name: "Sophia Martinez",
    role: "AI Application Developer",
    course: "AI Engineering and Generative AI",
    quote:
      "Learning how to design multi-agent workflows and optimize RAG pipelines gave me the practical confidence to lead generative AI initiatives at my company.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    achievement: "Built production AI customer agent handling 40k queries/day",
  },
  {
    id: "story-3",
    name: "David Kim",
    role: "Security Consultant",
    course: "Cyber Security and Ethical Hacking using AI",
    quote:
      "The focus on AI-assisted ethical hacking is unprecedented. We learned to defend against automated exploits and uncover vulnerabilities before attackers do.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    achievement: "Ranked Top 5 in National Cyber CTF Tournament",
  },
];

export const FAQS = [
  {
    q: "What makes NextGen Scholars different from traditional coding bootcamps?",
    a: "NextGen Scholars focuses on grooming practical, high-impact skills required in modern engineering teams. Rather than passive lectures, every learner builds production-grade software, receives direct feedback from senior industry engineers, and contributes actively to real-world tech solutions.",
  },
  {
    q: "Are the courses suitable for beginners?",
    a: "Our Full Stack Development track is tailored to take learners from foundational programming through advanced architectures. The AI Engineering and Cyber Security tracks are geared towards developers looking to master modern AI-driven practices.",
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
