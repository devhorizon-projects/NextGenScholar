import React from "react";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const LearningOutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-[#111214] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E6CA83]">
            Target Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Intended Learning Outcomes
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            By actively engaging in hands-on labs, guided assignments, and capstone development, learners will acquire concrete technical capabilities.
          </p>
        </div>

        {/* 8 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {AI_ENGINEERING_COURSE.learningOutcomes.map((outcome, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#171A1E] border border-white/10 hover:border-[#C5A253]/30 transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C5A253]/10 border border-[#C5A253]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A253]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Competency {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <p className="text-sm text-gray-200 leading-relaxed font-normal">
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note (Integrity Guideline) */}
        <div className="max-w-3xl mx-auto mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-gray-400 font-mono">
          <ShieldAlert className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <span>
            Note: These statements represent intended educational outcomes attained through active participation and coding coursework, rather than automated guarantees of proficiency or job placements.
          </span>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomesSection;
