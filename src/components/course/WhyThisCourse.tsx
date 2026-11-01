import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, Code, UserCheck, FolderGit2 } from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const WhyThisCourse: React.FC = () => {
  const icons = [
    <UserCheck className="w-6 h-6 text-[#C5A253]" />,
    <Code className="w-6 h-6 text-[#C5A253]" />,
    <Cpu className="w-6 h-6 text-[#C5A253]" />,
    <ShieldCheck className="w-6 h-6 text-[#C5A253]" />,
    <FolderGit2 className="w-6 h-6 text-[#C5A253]" />,
  ];

  return (
    <section id="why-this-course" className="py-24 bg-[#141619] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A253]/10 border border-[#C5A253]/20 text-[#E6CA83] text-xs font-mono tracking-widest uppercase">
            Built for Practical Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Next Gen Scholars?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
            We focus strictly on production engineering reality. Learn how real AI applications are designed, tested, secured, and deployed in industry—without theoretical detours or artificial promises.
          </p>
        </div>

        {/* 5 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_ENGINEERING_COURSE.differentiators.map((diff, index) => {
            const isFeatured = index === 2; // Complete AI Stack spans or highlights
            return (
              <div
                key={diff.number}
                className={`relative p-8 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#1C1F24] to-[#16181C] border-[#C5A253]/40 shadow-[0_4px_24px_rgba(197,162,83,0.12)]"
                    : "bg-[#181B1F] border-white/10 hover:border-white/20 hover:bg-[#1C1F24]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {icons[index] || <CheckCircle2 className="w-6 h-6 text-[#C5A253]" />}
                    </div>
                    <span className="text-2xl font-mono font-bold text-gray-600">
                      {diff.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#C5A253]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A253] flex-shrink-0" />
                  <span>Hands-on industry standard</span>
                </div>
              </div>
            );
          })}

          {/* Differentiator Summary / Integrity Notice card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1C1F24] via-[#17191D] to-[#121316] border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Integrity & Transparency
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Honest Learning Commitments
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We believe in verifiable skills and production rigor. We never offer misleading placement guarantees, unverified affiliations, or passive certification without real engineering execution.
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-gray-400">
              Portfolio-driven • Capstone assessed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;
