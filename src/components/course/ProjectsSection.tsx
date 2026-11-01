import React from "react";
import { FolderGit2, CheckCircle, Cpu, Layers, ArrowUpRight, Award, Terminal } from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#141619] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A253]/10 border border-[#C5A253]/20 text-[#E6CA83] text-xs font-mono uppercase tracking-widest">
            Portfolio Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects You Will Build
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Graduate with demonstrable, production-ready AI software applications hosted on your public GitHub portfolio.
          </p>
        </div>

        {/* 4 Illustrative Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {AI_ENGINEERING_COURSE.projects.map((proj) => (
            <div
              key={proj.id}
              className="p-8 rounded-3xl bg-[#181B20] border border-white/10 hover:border-[#C5A253]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-[#E6CA83] border border-white/10">
                    {proj.category}
                  </span>
                  <FolderGit2 className="w-5 h-5 text-gray-500 group-hover:text-[#C5A253] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#E6CA83] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {proj.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-gray-500 tracking-wider">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {proj.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A253] flex-shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#22262D] text-xs font-mono text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Capstone Showcase */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#1C1F25] via-[#16181D] to-[#121316] border border-[#C5A253]/35 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C5A253]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A253]/20 text-[#E6CA83] border border-[#C5A253]/40 text-xs font-mono uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Capstone Project Specification (Module 11)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                End-to-End Production AI Capstone
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Every learner designs, develops, tests, and deploys a comprehensive, end-to-end AI application addressing a real-world workflow problem. You define the data pipeline, design the architecture (RAG, agentic tools, or evaluation guardrails), connect a production API, and host a live demonstrator.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "Architecture", value: "System Design" },
                  { label: "Backend", value: "FastAPI / Node" },
                  { label: "Security", value: "Input Guardrails" },
                  { label: "Hosting", value: "Cloud Deployed" },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <div className="text-xs font-mono text-gray-400">{item.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111215] border border-white/10 space-y-4 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2 text-[#E6CA83] font-bold">
                <Terminal className="w-4 h-4" />
                <span>Capstone Evaluation Criteria:</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A253]">✓</span> Functional system architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A253]">✓</span> Evaluation harness & benchmark results
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A253]">✓</span> Prompt safety & guardrails applied
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A253]">✓</span> Public GitHub repo & live demonstration
                </li>
              </ul>
              <div className="pt-2 border-t border-white/10 text-xs text-gray-500">
                Peer reviewed with practitioner feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
