import React from "react";
import {
  Video,
  Code2,
  FileCheck2,
  GitBranch,
  Target,
  MessageSquareCode,
  Users,
} from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const LearningExperienceSection: React.FC = () => {
  const icons = [
    <Video className="w-5 h-5 text-[#C5A253]" />,
    <Code2 className="w-5 h-5 text-[#C5A253]" />,
    <FileCheck2 className="w-5 h-5 text-[#C5A253]" />,
    <GitBranch className="w-5 h-5 text-[#C5A253]" />,
    <Target className="w-5 h-5 text-[#C5A253]" />,
    <MessageSquareCode className="w-5 h-5 text-[#C5A253]" />,
    <Users className="w-5 h-5 text-[#C5A253]" />,
  ];

  return (
    <section className="py-24 bg-[#111214] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E6CA83]">
            Engineering Pedagogy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How You Learn
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Active, implementation-first education designed around code, system design reviews, and engineering iteration.
          </p>
        </div>

        {/* 7 Learning Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AI_ENGINEERING_COURSE.learningExperience.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#16181D] border border-white/10 hover:border-[#C5A253]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {icons[index] || <Code2 className="w-5 h-5 text-[#C5A253]" />}
                </div>
                <div className="text-xs font-mono text-[#C5A253] uppercase tracking-wider">
                  Pillar 0{index + 1}
                </div>
                <p className="text-sm text-gray-200 leading-relaxed font-normal">
                  {item}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-500">
                100% Practical
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningExperienceSection;
