import React, { useState } from "react";
import { GraduationCap, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { AI_ENGINEERING_COURSE, LearnerCategory } from "../../data/courseData";

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LearnerCategory>("College Student");

  const currentTrack =
    AI_ENGINEERING_COURSE.audienceTracks.find((t) => t.category === activeTab) ||
    AI_ENGINEERING_COURSE.audienceTracks[0];

  return (
    <section id="audience" className="py-24 bg-[#111214] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E6CA83]">
            Target Audience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Ambitious Learners
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Whether preparing for entry into the tech industry or advancing into production AI architecture, the curriculum adapts to your practical career goals.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#1A1D22] border border-white/10">
            <button
              onClick={() => setActiveTab("College Student")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "College Student"
                  ? "bg-gradient-to-r from-[#C5A253] to-[#8D6A2C] text-[#111214] shadow-md font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For College Students</span>
            </button>

            <button
              onClick={() => setActiveTab("Working Professional")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "Working Professional"
                  ? "bg-gradient-to-r from-[#C5A253] to-[#8D6A2C] text-[#111214] shadow-md font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Working Professionals</span>
            </button>
          </div>
        </div>

        {/* Track Content Card */}
        <div className="max-w-4xl mx-auto bg-[#17191D] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C5A253]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#C5A253]">
                {activeTab === "College Student" ? (
                  <GraduationCap className="w-7 h-7" />
                ) : (
                  <Briefcase className="w-7 h-7" />
                )}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentTrack.title}
                </h3>
                <span className="text-xs font-mono text-[#C5A253] uppercase tracking-wider">
                  Audience-Specific Pathway
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {currentTrack.description}
            </p>

            {/* Benefits List */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                Key Learning Outcomes for this Profile
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTrack.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C5A253] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Note */}
            <div className="pt-4 text-xs font-mono text-gray-400 flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A253]" />
              <span>
                Same unified 72-hour rigorous engineering curriculum; individualized application contexts.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
