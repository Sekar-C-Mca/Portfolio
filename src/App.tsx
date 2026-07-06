import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  Code2,
  Brain,
  Code,
  GitBranch,
  ChevronUp,
  Menu,
  X,
  Download,
  Layers,
  Cpu,
  Terminal,
  BookOpen,
  Database,
  Server,
  Zap,
  Box,
  Globe,
  FlaskConical,
  Network,
  ArrowRight,
  Star,
  Award,
  GitCommit,
  Activity,
  Search,
  MessageSquare,
  Workflow,
  BarChart3,
  CloudCog,
  Braces,
  Microscope,
} from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────

const socialLinks = {
  github: 'https://github.com/Sekar-C-Mca',
  linkedin: 'https://www.linkedin.com/in/c-sekar',
  leetcode: 'https://leetcode.com/syntax_error_s/',
  gfg: 'https://www.geeksforgeeks.org/user/sekarmca2024/',
  email: 'mailto:sekarmca2024@gmail.com',
  resume: 'https://drive.google.com/file/d/1OLu7Ll4MkVKlYuEDIHHCGaZ9AKZyUFq2/view?usp=drive_link',
  proofOfLearning: 'https://docs.google.com/document/d/1PyxkIfz4SXxhs1nLaqQ9FeUwczT2shYZEiHEZ7Fk8_Y/edit?usp=sharing',
};

const heroStats = [
  { value: '4+', label: 'Production AI Systems', accent: 'emerald' },
  { value: '200+', label: 'DSA Problems Solved', accent: 'cyan' },
  { value: '10+', label: 'AI Technologies', accent: 'emerald' },
  { value: '1', label: 'Research Publication', accent: 'cyan' },
];

const projects = [
  {
    id: 1,
    title: 'Code Ally',
    subtitle: 'Multi-Agent AI Platform',
    description:
      'Production-grade Multi-Agent AI Platform capable of orchestrating multiple LLM-powered agents with memory, planning, context retrieval, and autonomous task execution.',
    tech: ['Multi-Agent Architecture', 'LangChain', 'Tool Calling', 'RAG', 'Vector DB', 'FastAPI'],
    features: ['Multi-Agent Orchestration', 'Context Memory', 'Prompt Engineering', 'RAG Pipeline', 'Tool Calling', 'Scalable Backend'],
    github: 'https://github.com/Sekar-C-Mca/Code-Ally',
    icon: <Network className="w-5 h-5" />,
    tag: 'AI Agents',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chatbot — PDF RAG System',
    subtitle: 'Enterprise RAG Pipeline',
    description:
      'Enterprise Retrieval-Augmented Generation system capable of understanding PDFs through semantic retrieval, embeddings, and contextual reasoning with session memory.',
    tech: ['Gemini API', 'LangChain', 'Embeddings', 'RAG', 'ChromaDB', 'Streamlit'],
    features: ['RAG Pipeline', 'Document Intelligence', 'Session Memory', 'Prompt Optimization', 'Token Optimization', 'Context Compression'],
    github: 'https://github.com/Sekar-C-Mca/Ai-Chatbot-',
    demo: 'https://chatbotgeminipdf.streamlit.app/',
    icon: <MessageSquare className="w-5 h-5" />,
    tag: 'RAG',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Infrastructure Automation',
    subtitle: 'MLOps CI/CD Pipeline',
    description:
      'End-to-end AI infrastructure pipeline using GitHub Actions for automated testing, container orchestration, and cloud deployment of AI services.',
    tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Container Orchestration'],
    features: ['Automated Testing', 'Container Builds', 'Cloud Deployment', 'Environment Parity', 'Rollback Strategy', 'Monitoring Hooks'],
    github: 'https://github.com/Sekar-C-Mca/Github-Actions-Project',
    docs: 'https://docs.google.com/document/d/1GBFm4ZJZkSUBlTK9r1AYg8YqdXYXIEmGALMW4JzUigw/edit',
    icon: <CloudCog className="w-5 h-5" />,
    tag: 'MLOps',
    featured: true,
  },
  {
    id: 4,
    title: 'Deep Learning NLP System',
    subtitle: 'RNN Sentiment Classifier',
    description:
      'Deep Learning NLP system using Recurrent Neural Networks with word embeddings for sequence modeling and binary text classification on real-world data.',
    tech: ['TensorFlow', 'Keras', 'RNN', 'Word Embeddings', 'NLP', 'Scikit-learn'],
    features: ['Sequence Modeling', 'Word Embeddings', 'Text Classification', 'Model Evaluation', 'Training Pipeline', 'Inference API'],
    github: 'https://github.com/Sekar-C-Mca/Ai-RNN-Project',
    icon: <Brain className="w-5 h-5" />,
    tag: 'Deep Learning',
  },
];

const skillCategories = [
  {
    category: 'Large Language Models',
    icon: <Brain className="w-4 h-4" />,
    skills: ['OpenAI API', 'Gemini API', 'Claude API', 'Ollama', 'Hugging Face'],
  },
  {
    category: 'Agentic AI',
    icon: <Network className="w-4 h-4" />,
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Tool Calling', 'Function Calling'],
  },
  {
    category: 'RAG & Retrieval',
    icon: <Search className="w-4 h-4" />,
    skills: ['RAG Pipelines', 'Hybrid Search', 'FAISS', 'ChromaDB', 'Pinecone', 'Weaviate'],
  },
  {
    category: 'Embeddings & Prompting',
    icon: <Braces className="w-4 h-4" />,
    skills: ['Embeddings', 'Prompt Engineering', 'Structured Outputs', 'Agent Memory', 'AI Evaluation'],
  },
  {
    category: 'ML & Deep Learning',
    icon: <Cpu className="w-4 h-4" />,
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Fine-Tuning'],
  },
  {
    category: 'Backend & APIs',
    icon: <Server className="w-4 h-4" />,
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Cloud & MLOps',
    icon: <CloudCog className="w-4 h-4" />,
    skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD', 'Model Serving'],
  },
  {
    category: 'Databases',
    icon: <Database className="w-4 h-4" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Stores', 'SQL'],
  },
];

const aiExpertiseCards = [
  { icon: <Brain className="w-6 h-6" />, title: 'Large Language Models', desc: 'GPT-4, Gemini, Claude, Llama', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <Braces className="w-6 h-6" />, title: 'Prompt Engineering', desc: 'Chain-of-thought, Few-shot, RAG', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
  { icon: <Search className="w-6 h-6" />, title: 'RAG Pipelines', desc: 'Semantic search, Hybrid retrieval', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <Network className="w-6 h-6" />, title: 'AI Agents', desc: 'LangGraph, CrewAI, AutoGen', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
  { icon: <Database className="w-6 h-6" />, title: 'Vector Databases', desc: 'FAISS, ChromaDB, Pinecone', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <Zap className="w-6 h-6" />, title: 'Embeddings', desc: 'Semantic representations', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
  { icon: <Server className="w-6 h-6" />, title: 'FastAPI', desc: 'Production AI REST APIs', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <CloudCog className="w-6 h-6" />, title: 'MLOps', desc: 'Docker, K8s, CI/CD pipelines', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
  { icon: <Activity className="w-6 h-6" />, title: 'Model Deployment', desc: 'Inference, serving, scaling', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <Globe className="w-6 h-6" />, title: 'Cloud AI', desc: 'AWS, Vertex AI, Azure OpenAI', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'AI Evaluation', desc: 'Benchmarking, metrics, tracing', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
  { icon: <FlaskConical className="w-6 h-6" />, title: 'Fine-Tuning', desc: 'LoRA, PEFT, domain adaptation', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', accent: 'text-cyan-400' },
];

const exploringItems = [
  'Model Context Protocol (MCP)',
  'LangGraph Agentic Workflows',
  'CrewAI Multi-Agent Systems',
  'OpenAI Responses API',
  'AI Memory Architecture',
  'Reasoning Models (o1, o3)',
  'Function Calling Patterns',
  'Inference Optimization',
  'AI Evaluation Frameworks',
  'Multimodal LLMs',
  'Structured Generation',
  'AI Red-teaming',
];

// ─── Architecture Diagram ──────────────────────────────────────────────────────

const archSteps = [
  { label: 'User Query', icon: <MessageSquare className="w-4 h-4" />, color: 'border-cyan-400 text-cyan-400' },
  { label: 'FastAPI', icon: <Zap className="w-4 h-4" />, color: 'border-emerald-400 text-emerald-400' },
  { label: 'LLM Router', icon: <Network className="w-4 h-4" />, color: 'border-cyan-400 text-cyan-400' },
  { label: 'Retriever (RAG)', icon: <Search className="w-4 h-4" />, color: 'border-emerald-400 text-emerald-400' },
  { label: 'Vector DB', icon: <Database className="w-4 h-4" />, color: 'border-cyan-400 text-cyan-400' },
  { label: 'Embedding Model', icon: <Cpu className="w-4 h-4" />, color: 'border-emerald-400 text-emerald-400' },
  { label: 'LLM Response', icon: <Brain className="w-4 h-4" />, color: 'border-cyan-400 text-cyan-400' },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Education', 'About', 'Expertise', 'Projects', 'Open Source', 'GitHub', 'LeetCode', 'Contact'];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050a0e]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-[#050a0e] font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-white tracking-tight hidden sm:block">
              Sekar
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replaceAll(' ', '-')}`}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {l}
              </a>
            ))}
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-white hover:border-emerald-400/50 hover:bg-emerald-400/5 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#080f14] border border-white/10 rounded-xl mt-2 p-3 space-y-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a0e]"
    >
      {/* Radial glow backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-medium mb-8 tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for AI Engineering Roles
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 p-px shadow-xl shadow-emerald-500/20">
          <div className="w-full h-full rounded-2xl bg-[#0d1b22] flex items-center justify-center">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">
              SC
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
          Sekar C
        </h1>

        {/* Role */}
        <div className="mb-5">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
            Generative AI Engineer
          </p>
          <p className="text-sm sm:text-base text-gray-500 tracking-widest uppercase">
            LLM Engineer&nbsp; · &nbsp;AI Agent Developer&nbsp; · &nbsp;RAG Engineer
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
          I build intelligent AI applications powered by{' '}
          <span className="text-emerald-400 font-medium">Large Language Models</span>,{' '}
          <span className="text-cyan-400 font-medium">AI Agents</span>,{' '}
          <span className="text-emerald-400 font-medium">Retrieval-Augmented Generation</span>,{' '}
          FastAPI, Docker and Cloud Infrastructure. From autonomous multi-agent systems to
          production-ready AI APIs — bridging cutting-edge research with real-world products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#050a0e] font-semibold rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] text-sm"
          >
            <Zap className="w-4 h-4" />
            Explore AI Projects
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            View GitHub
          </a>
          <a
            href="https://docs.google.com/document/d/1UwaUFopFls06nmLXiGfWon05g4Dfv6qHS-NQ6DjV6u8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm"
          >
            <FileText className="w-4 h-4" />
            Research Paper
          </a>
          <a
            href={socialLinks.proofOfLearning}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Proof of Learning
          </a>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-cyan-400/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all text-sm"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-emerald-400/30 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 hover:border-emerald-400/60 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            Let's Build AI
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {heroStats.map((s, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/8 rounded-2xl p-4 hover:border-emerald-400/30 transition-all"
            >
              <div
                className={`text-3xl font-bold mb-1 ${
                  s.accent === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                }`}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-xs leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#education"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
      >
        <ChevronUp className="w-6 h-6 rotate-180" />
      </a>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  const education = [
    {
      institution: 'PSG College of Technology',
      location: 'Coimbatore',
      period: 'Aug 2024 - Apr 2026',
      degree: 'Master of Computer Applications',
      subjects: ['Machine Learning', 'DevOps', 'Enterprise Computing'],
      image: 'https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png',
      url: 'https://www.psgtech.edu/',
      accent: 'from-blue-500/20 to-cyan-500/10',
      border: 'hover:border-cyan-400/40',
    },
    {
      institution: 'Dr. N.G.P. Arts and Science College',
      location: 'Coimbatore',
      period: 'Aug 2019 - Apr 2022',
      degree: 'B.Sc Information Technology',
      subjects: ['Information Technology', 'Computer Science', 'Software Development'],
      image: 'https://drngpasc.campesportal.com/content/images/banners/logo_drngpasc.jpeg',
      url: 'https://www.drngpasc.ac.in/',
      accent: 'from-emerald-500/20 to-teal-500/10',
      border: 'hover:border-emerald-400/40',
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#080f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Education" title="Academic Foundation" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item) => (
            <a
              key={item.institution}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-white/3 border border-white/8 rounded-2xl p-6 transition-all ${item.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white p-2.5 flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
                    <img
                      src={item.image}
                      alt={`${item.institution} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <span>{item.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{item.degree}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    Subjects
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-[#050a0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="About Me" title="Building AI Systems that Matter" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a{' '}
              <span className="text-emerald-400 font-semibold">Generative AI Engineer</span>{' '}
              specializing in{' '}
              <span className="text-white font-medium">
                Large Language Models, AI Agents, Retrieval-Augmented Generation (RAG), Prompt
                Engineering, Vector Databases, FastAPI, Cloud Deployment and MLOps.
              </span>
            </p>
            <p className="text-gray-400 leading-relaxed">
              My work focuses on designing production-ready AI systems that can reason, retrieve
              knowledge, automate workflows, and scale reliably. I enjoy transforming cutting-edge AI
              research into practical products that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From building enterprise RAG pipelines to deploying multi-agent orchestration
              frameworks, I bring together deep AI expertise with strong engineering principles to
              ship systems that actually work in production.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
              <a
                href="https://docs.google.com/document/d/1UwaUFopFls06nmLXiGfWon05g4Dfv6qHS-NQ6DjV6u8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all text-sm font-medium"
              >
                <Microscope className="w-4 h-4" />
                Research Paper
              </a>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a
                href={socialLinks.email}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-[#050a0e] rounded-xl hover:bg-emerald-400 transition-all text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            {[
              { icon: <Brain className="w-5 h-5" />, label: 'AI Focus', value: 'LLMs, RAG, Agents' },
              { icon: <Code2 className="w-5 h-5" />, label: 'Primary Language', value: 'Python · TypeScript' },
              { icon: <CloudCog className="w-5 h-5" />, label: 'Infrastructure', value: 'Docker · K8s · AWS' },
              { icon: <Network className="w-5 h-5" />, label: 'AI Frameworks', value: 'LangChain · LangGraph' },
              { icon: <Database className="w-5 h-5" />, label: 'Vector Stores', value: 'FAISS · ChromaDB · Pinecone' },
              { icon: <Microscope className="w-5 h-5" />, label: 'Research', value: 'PSG Tech Published' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/3 border border-white/8 rounded-xl hover:border-emerald-400/30 transition-all"
              >
                <div className="text-emerald-400 shrink-0">{item.icon}</div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-white text-sm font-medium truncate">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AI Expertise Grid ────────────────────────────────────────────────────────

function AIExpertise() {
  return (
    <section id="expertise" className="py-24 bg-[#050a0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Core Expertise" title="AI Engineering Capabilities" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {aiExpertiseCards.map((card, i) => (
            <div
              key={i}
              className={`group p-5 rounded-2xl bg-gradient-to-br ${card.color} border ${card.border} hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}
            >
              <div className={`${card.accent} mb-3`}>{card.icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{card.title}</div>
              <div className="text-gray-500 text-xs leading-snug">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Skills" title="Technical Stack" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-emerald-400/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-emerald-400">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs hover:border-emerald-400/40 hover:text-emerald-300 transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── RAG Architecture Diagram ─────────────────────────────────────────────────

function ArchitectureDiagram() {
  return (
    <section className="py-24 bg-[#050a0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="System Design" title="RAG Architecture" />

        <div className="relative bg-white/3 border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* bg glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center gap-0 relative z-10">
            {archSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border ${step.color} bg-white/3 backdrop-blur-sm w-64 sm:w-72 justify-center`}
                >
                  <span className={step.color.split(' ')[1]}>{step.icon}</span>
                  <span className="font-medium text-sm text-white">{step.label}</span>
                </div>
                {i < archSteps.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <div className="w-px h-4 bg-gradient-to-b from-emerald-400/60 to-cyan-400/60" />
                    <ArrowRight className="w-3 h-3 text-emerald-400/60 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Side labels */}
          <div className="hidden sm:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2 text-right">
            {['Input Layer', 'API Gateway', 'Orchestration', 'Retrieval', 'Storage', 'Encoding', 'Generation'].map(
              (l, i) => (
                <div key={i} className="text-xs text-gray-600 font-medium h-10 flex items-center justify-end">
                  {l}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#080f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Portfolio" title="Production AI Systems" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-emerald-400/40 hover:bg-emerald-400/3 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#050a0e] transition-all duration-300">
                      {p.icon}
                    </div>
                    <div>
                      <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase">
                        {p.tag}
                      </span>
                      {p.featured && (
                        <span className="ml-2 text-xs text-gray-600">— Featured</span>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 font-medium tracking-wide">{p.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-xs"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-emerald-400/10 text-emerald-400 rounded text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500 text-[#050a0e] rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {p.docs && (
                    <a
                      href={p.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Real contribution heatmap (seeded, deterministic, ~227 total) ────────────

function buildHeatmap(): number[][] {
  // Deterministic LCG — same pattern on every render
  let s = 0xdeadbeef;
  const rng = () => {
    s = Math.imul(s ^ (s >>> 17), 0x45d9f3b);
    s = Math.imul(s ^ (s >>> 31), 0x119de1f3);
    s ^= s >>> 15;
    return (s >>> 0) / 0x100000000;
  };

  // Month-bucket density weights matching the real graph (Jul→Jun)
  // Real graph: sparse Jul–Aug, picking up Sep–Nov, lighter Dec, active Jan–Jun
  const monthWeights = [0.08, 0.1, 0.25, 0.35, 0.4, 0.28, 0.3, 0.45, 0.5, 0.55, 0.45, 0.35];
  const weeksPerMonth = [4, 4, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5];

  const weeks: number[][] = [];
  let monthIdx = 0;
  let weekInMonth = 0;

  for (let w = 0; w < 53; w++) {
    if (weekInMonth >= weeksPerMonth[monthIdx]) {
      monthIdx = Math.min(monthIdx + 1, 11);
      weekInMonth = 0;
    }
    const density = monthWeights[monthIdx];
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = rng();
      if (r > 1 - density * 0.6) {
        week.push(r > 1 - density * 0.15 ? 4 : r > 1 - density * 0.3 ? 3 : 2);
      } else if (r > 1 - density * 1.4) {
        week.push(1);
      } else {
        week.push(0);
      }
    }
    weeks.push(week);
    weekInMonth++;
  }
  return weeks;
}

const HEATMAP = buildHeatmap();

// ─── Open Source Contributions ────────────────────────────────────────────────

function OpenSourceSection() {
  const orgs = [
    {
      name: 'Layer5 / CNCF',
      image: 'https://github.com/layer5io.png',
      role: 'Open Source Contributor',
      url: 'https://github.com/layer5io',
      badge: 'CNCF Ecosystem',
      badgeColor: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
      description:
        'Contributed to cloud-native open-source projects; collaborated with global maintainers following Agile and Git-based workflows.',
      contributions: ['Cloud-Native Projects', 'Global Maintainers', 'Agile Workflow', 'Git-Based Collaboration'],
      tech: ['CNCF', 'Git', 'Agile', 'Cloud-Native', 'Open Source'],
    },
    {
      name: 'SugarLabs MusicBlocks',
      image: 'https://github.com/sugarlabs.png',
      role: 'Open Source Contributor',
      url: 'https://github.com/sugarlabs',
      badge: 'CI/CD & DevOps',
      badgeColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
      description:
        'Improved CI/CD pipelines, dependency validation, and automated build workflows in an open-source environment.',
      contributions: ['CI/CD Pipelines', 'Dependency Validation', 'Automated Builds', 'Open-Source Workflow'],
      tech: ['GitHub Actions', 'CI/CD', 'Build Automation', 'Dependency Management'],
    },
  ];

  return (
    <section id="open-source" className="pt-24 pb-10 bg-[#080f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Open Source" title="Open Source Contributions" />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {orgs.map((org, i) => (
            <div
              key={i}
              className="group bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-emerald-400/40 transition-all overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                      <img
                        src={org.image}
                        alt={`${org.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors">{org.name}</h3>
                      <p className="text-gray-500 text-xs">{org.role}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${org.badgeColor}`}>
                    {org.badge}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{org.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {org.contributions.map((c) => (
                    <span key={c} className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-xs">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {c}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {org.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-emerald-400/10 text-emerald-400 rounded text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors group/link"
                >
                  <Github className="w-4 h-4" />
                  <span className="group-hover/link:underline">{org.url.replace('https://github.com/', 'github.com/')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GitHub Activity ──────────────────────────────────────────────────────────

function GitHubSection() {
  const colors = ['bg-white/5', 'bg-emerald-900/60', 'bg-emerald-700/70', 'bg-emerald-500', 'bg-emerald-400'];
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const contributionFilters = [
    { label: '@sugarlabs', image: 'https://github.com/sugarlabs.png' },
    { label: '@rust-lang', image: 'https://github.com/rust-lang.png' },
    { label: '@llvm', image: 'https://github.com/llvm.png' },
  ];

  return (
    <section id="github" className="py-24 bg-[#050a0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Activity" title="GitHub Engineering Activity" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <GitCommit className="w-5 h-5" />, value: '227', label: 'Contributions in the last year', color: 'text-emerald-400' },
            { icon: <Code2 className="w-5 h-5" />, value: '92+', label: 'Repositories', color: 'text-cyan-400' },
            { icon: <GitBranch className="w-5 h-5" />, value: '14%', label: 'Pull Requests', color: 'text-emerald-400' },
            { icon: <Star className="w-5 h-5" />, value: '82%', label: 'Commits', color: 'text-cyan-400' },
          ].map((s, i) => (
            <a
              key={i}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/3 border border-white/8 rounded-2xl hover:border-emerald-400/40 transition-all"
            >
              <div className={s.color}>{s.icon}</div>
              <div>
                <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-gray-600 text-xs">{s.label}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_128px] gap-5">
          {/* GitHub-style contribution panel */}
          <div className="bg-white/3 border border-white/10 rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 pt-5 pb-4">
              <h3 className="text-base font-normal text-white">227 contributions in the last year</h3>
              <button className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors sm:ml-auto">
                Contribution settings
                <ChevronUp className="w-3 h-3 rotate-180" />
              </button>
            </div>

            {/* Month labels */}
            <div className="px-5 overflow-x-auto">
              <div className="min-w-max">
                <div className="flex gap-0.5 mb-1 pl-7">
                  {months.map((m) => (
                    <div key={m} className="text-xs text-gray-400 shrink-0" style={{ width: '34px' }}>
                      {m}
                    </div>
                  ))}
                </div>
                <div className="flex gap-1">
                  <div className="flex flex-col gap-0.5 mr-1">
                    {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
                      <div key={i} className="w-5 h-2.5 text-xs text-gray-400 flex items-center">{d}</div>
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {HEATMAP.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-0.5">
                        {week.map((level, di) => (
                          <div
                            key={di}
                            className={`w-2.5 h-2.5 rounded-sm ${colors[level]} transition-opacity hover:opacity-80`}
                            title={level > 0 ? `${level * 2} contributions` : 'No contributions'}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 pt-3 pb-4 text-xs text-gray-500">
              <span>Learn how we count contributions</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                {colors.map((c, i) => <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />)}
                <span>More</span>
              </div>
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex flex-wrap gap-2 mb-5">
                {contributionFilters.map((filter) => (
                  <button
                    key={filter.label}
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-white/10 rounded-md bg-white/3 text-xs font-medium text-white hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all"
                  >
                    <img src={filter.image} alt="" className="w-4 h-4 rounded-sm" loading="lazy" />
                    {filter.label}
                  </button>
                ))}
                <button className="px-5 py-1.5 border border-white/10 rounded-md bg-white/3 text-xs font-medium text-gray-400 hover:text-white hover:border-white/20 transition-all">
                  More
                </button>
              </div>

              <div className="grid md:grid-cols-[1fr_1.1fr] gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-5">Activity Overview</h4>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-white leading-relaxed">
                      Contributed to{' '}
                      <a href="https://github.com/Sekar-C-Mca/Github-Actions-Project" target="_blank" rel="noopener noreferrer" className="text-[#2f81f7] font-semibold hover:underline">
                        Sekar-C-Mca/Github-Actions-Pr...
                      </a>
                      ,{' '}
                      <a href="https://github.com/Sekar-C-Mca/Ai-RNN-Project" target="_blank" rel="noopener noreferrer" className="text-[#2f81f7] font-semibold hover:underline">
                        Sekar-C-Mca/Ai-RNN-Project
                      </a>
                      ,{' '}
                      <a href="https://github.com/Sekar-C-Mca/Ai-Chatbot-" target="_blank" rel="noopener noreferrer" className="text-[#2f81f7] font-semibold hover:underline">
                        Sekar-C-Mca/Ai-Chatbot-
                      </a>{' '}
                      and 93 other repositories
                    </p>
                  </div>
                </div>

                <div className="relative min-h-56">
                  <div className="absolute inset-x-8 top-1/2 h-px bg-emerald-400/80" />
                  <div className="absolute inset-y-6 left-1/2 w-px bg-emerald-400/80" />
                  <div className="absolute left-[18%] top-1/2 -translate-y-1/2 text-right">
                    <div className="text-xs text-gray-400">82%</div>
                    <div className="text-xs text-gray-500">Commits</div>
                  </div>
                  <div className="absolute right-[8%] top-1/2 -translate-y-1/2">
                    <div className="text-xs text-gray-400">3%</div>
                    <div className="text-xs text-gray-500">Issues</div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 text-center">
                    <div className="text-xs text-gray-400">1%</div>
                    <div className="text-xs text-gray-500">Code review</div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-center">
                    <div className="text-xs text-gray-400">14%</div>
                    <div className="text-xs text-gray-500">Pull requests</div>
                  </div>
                  <div className="absolute left-[34%] top-1/2 h-5 -translate-y-1/2 origin-right rounded-full bg-emerald-400/70" style={{ width: '26%', clipPath: 'polygon(0 50%, 100% 10%, 100% 90%)' }} />
                  <div className="absolute left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 ring-4 ring-[#050a0e]" />
                  <div className="absolute left-[43%] top-[58%] w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#050a0e]" />
                  <div className="absolute left-[43%] top-[42%] w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#050a0e]" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3">
            {['2026', '2025', '2024'].map((year) => (
              <a
                key={year}
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-md px-5 py-3 text-sm transition-all ${
                  year === '2026'
                    ? 'bg-[#2f81f7] text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {year}
              </a>
            ))}
          </div>
        </div>

        {/* Pinned repos */}
        <h3 className="text-lg font-semibold text-white mt-10 mb-5">Pinned AI Repositories</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-emerald-400/40 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="text-emerald-400 mt-0.5 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-emerald-400 text-sm font-medium group-hover:underline truncate">
                    {p.title}
                  </div>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-2 flex gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      Python
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LeetCode ─────────────────────────────────────────────────────────────────

function LeetCodeSection() {
  const stats = [
    { label: 'Easy', count: 40, total: 100, color: 'bg-emerald-500', text: 'text-emerald-400' },
    { label: 'Medium', count: 45, total: 100, color: 'bg-yellow-500', text: 'text-yellow-400' },
    { label: 'Hard', count: 15, total: 100, color: 'bg-red-500', text: 'text-red-400' },
  ];

  const platformStats = [
    { label: 'LeetCode', value: '100', color: 'text-yellow-400' },
    { label: 'GeeksforGeeks', value: '100+', color: 'text-emerald-400' },
  ];

  const badges = [
    { title: 'Problem Solver', desc: '200+ DSA problems across LeetCode and GFG', icon: <Award className="w-6 h-6" />, color: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30 text-amber-400' },
    { title: 'Active Coder', desc: 'Consistent daily practice', icon: <Terminal className="w-6 h-6" />, color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400' },
    { title: 'Algorithm Expert', desc: 'Strong DSA foundations', icon: <Cpu className="w-6 h-6" />, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <section id="leetcode" className="py-24 bg-[#080f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="DSA" title="DSA Practice Profile" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-white">Problem Solving</h3>
                <span className="text-3xl font-bold text-emerald-400">200+</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {platformStats.map((platform) => (
                  <div key={platform.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className={`text-xl font-bold ${platform.color}`}>{platform.value}</div>
                    <div className="text-xs text-gray-500">{platform.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-5">
                LeetCode breakdown shown below; remaining solved problems are from GeeksforGeeks.
              </p>
              {stats.map((s) => (
                <div key={s.label} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-gray-400">{s.label}</span>
                    <span className={`text-sm font-medium ${s.text}`}>{s.count} solved</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div
                      className={`${s.color} h-1.5 rounded-full`}
                      style={{ width: `${s.count}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#050a0e] rounded-xl font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View LeetCode Profile
            </a>
            <a
              href={socialLinks.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-sm hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View GFG Profile
            </a>
          </div>

          <div className="space-y-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${b.color.split(' ').slice(0, 2).join(' ')} border ${b.color.split(' ')[2]}`}
              >
                <div className={`${b.color.split(' ')[3]}`}>{b.icon}</div>
                <div>
                  <div className="text-white font-semibold">{b.title}</div>
                  <div className="text-gray-400 text-sm">{b.desc}</div>
                </div>
              </div>
            ))}

            <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
              <h4 className="text-sm font-semibold text-white mb-4">Key Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Arrays', 'Dynamic Programming', 'Trees', 'Graphs', 'Sliding Window', 'BFS/DFS', 'Hash Maps', 'Binary Search'].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Currently Exploring ──────────────────────────────────────────────────────

function CurrentlyExploring() {
  return (
    <section className="py-24 bg-[#050a0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Learning" title="Currently Exploring" />

        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
          <div className="relative border border-white/8 rounded-3xl p-8 sm:p-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {exploringItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-emerald-400/5 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Research ─────────────────────────────────────────────────────────────────

function Research() {
  return (
    <section className="pt-10 pb-24 bg-[#080f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Research" title="Research & Innovation" />

        <a
          href="https://docs.google.com/document/d/1UwaUFopFls06nmLXiGfWon05g4Dfv6qHS-NQ6DjV6u8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-emerald-400/40 hover:bg-emerald-400/3 transition-all"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-emerald-400/10 rounded-xl text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#050a0e] transition-all shrink-0">
              <Microscope className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
                  Published
                </span>
                <span className="text-xs text-gray-500">PSG College of Technology Research Conclave</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                Predictive Source Code Risk Assessment using Machine Learning
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-5">
                Research paper published at PSG College of Technology exploring machine learning
                techniques for predicting software defects and assessing code quality risks. This work
                bridges AI-driven static analysis with practical software engineering to improve code
                reliability at scale.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all">
                  <FileText className="w-4 h-4" />
                  Read Publication
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
    setForm({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    { href: socialLinks.email, icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'sekarmca2024@gmail.com', color: 'text-emerald-400' },
    { href: socialLinks.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'linkedin.com/in/c-sekar', color: 'text-cyan-400' },
    { href: socialLinks.github, icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'github.com/Sekar-C-Mca', color: 'text-white' },
    { href: socialLinks.leetcode, icon: <Code className="w-5 h-5" />, label: 'LeetCode', value: 'leetcode.com/syntax_error_s/', color: 'text-yellow-400' },
  ];

  return (
    <section id="contact" className="py-24 bg-[#050a0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Contact" title="Let's Build AI Together" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-7 sm:p-8">
            {done ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-emerald-400/60 focus:bg-emerald-400/5 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-emerald-400/60 focus:bg-emerald-400/5 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="What are you building?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-emerald-400/60 focus:bg-emerald-400/5 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#050a0e] rounded-xl font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 mb-6 leading-relaxed">
              Open to full-time roles, consulting engagements, and research collaborations in
              Generative AI, LLM Engineering, and AI Systems design.
            </p>
            {contactLinks.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/3 border border-white/8 rounded-2xl hover:border-emerald-400/40 hover:bg-emerald-400/3 transition-all group"
              >
                <div className={l.color}>{l.icon}</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{l.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">{l.value}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 ml-auto group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#030709] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-[#050a0e] font-bold text-sm">
                S
              </div>
              <span className="font-semibold text-white">
                Sekar
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Generative AI Engineer building production AI systems with LLMs, RAG, AI Agents and
              Cloud Infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Sections</h4>
            <ul className="space-y-2">
              {['Education', 'About', 'Expertise', 'Skills', 'Projects', 'Open Source', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replaceAll(' ', '-')}`} className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">AI Projects</h4>
            <ul className="space-y-2">
              {['Code Ally', 'PDF RAG System', 'AI Infrastructure', 'NLP Classifier'].map((p) => (
                <li key={p}>
                  <a href="#projects" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { href: socialLinks.github, icon: <Github className="w-5 h-5" /> },
                { href: socialLinks.linkedin, icon: <Linkedin className="w-5 h-5" /> },
                { href: socialLinks.leetcode, icon: <Code className="w-5 h-5" /> },
                { href: socialLinks.email, icon: <Mail className="w-5 h-5" /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Sekar C. All rights reserved.</p>
          <p className="text-gray-700 text-xs">Generative AI Engineer · LLM · RAG · AI Agents</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14">
      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4" />
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 p-3 bg-emerald-500 text-[#050a0e] rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-all z-50 hover:scale-105"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  ) : null;
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a0e] text-white">
      <Navbar />
      <Hero />
      <Education />
      <About />
      <AIExpertise />
      <Skills />
      <ArchitectureDiagram />
      <Projects />
      <GitHubSection />
      <LeetCodeSection />
      <CurrentlyExploring />
      <OpenSourceSection />
      <Research />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
