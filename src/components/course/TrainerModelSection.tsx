import React from "react";
import { UserCheck, ShieldCheck, Briefcase, Award, CheckCircle2, Info } from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const TrainerModelSection: React.FC = () => {
  const { trainerModel } = AI_ENGINEERING_COURSE;

  return (
    <section id="trainers" className="py-24 bg-[#141619] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A253]/10 border border-[#C5A253]/20 text-[#E6CA83] text-xs font-mono uppercase tracking-widest">
            Industry Practitioner Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {trainerModel.headline}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            {trainerModel.description}
          </p>
        </div>

        {/* 2-Column Layout: Strict Criteria vs Transparent Cohort Faculty Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: Mandatory Faculty Standards */}
          <div className="p-8 rounded-3xl bg-[#181B20] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A253]/15 border border-[#C5A253]/30 flex items-center justify-center text-[#E6CA83]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Our Faculty Standards
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  Non-negotiable qualification criteria
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We do not rely on academic theorists or generalist presenters. Every instructor must pass rigorous screening demonstrating active, hands-on production engineering credentials.
            </p>

            <ul className="space-y-3 pt-2">
              {trainerModel.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A253] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Reusable Instructor Profile Card with Transparent Notice */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#1A1D23] to-[#14161B] border border-[#C5A253]/30 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#C5A253]/15 text-[#E6CA83] text-xs font-mono border border-[#C5A253]/30">
                  Cohort Roster Notice
                </span>
                <span className="text-xs font-mono text-gray-400">
                  4+ Years Industry Exp Minimum
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 flex-shrink-0">
                  <UserCheck className="w-8 h-8 text-[#C5A253]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Verified Industry Lead Engineers
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Senior AI Engineers, Staff MLOps & RAG Specialists
                  </p>
                  <p className="text-xs text-[#E6CA83] mt-1">
                    Confirmed prior to batch onboarding
                  </p>
                </div>
              </div>

              {/* Honest Placeholder Statement */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 space-y-2">
                <div className="flex items-center gap-2 font-mono text-[#E6CA83]">
                  <Info className="w-3.5 h-3.5" />
                  <span>Announcement Policy</span>
                </div>
                <p className="leading-relaxed text-gray-400">
                  {trainerModel.placeholderNotice}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                  Typical Faculty Expertise Covered:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "LLM Infrastructure",
                    "RAG Architectures",
                    "Autonomous Agents",
                    "FastAPI Services",
                    "Security & Evaluation",
                    "Docker & Cloud MLOps",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-gray-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>Practitioner-led instruction</span>
              <span className="text-[#C5A253]">Zero generic theory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerModelSection;
