import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

export const CourseFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-[#141619] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E6CA83]">
            Common Queries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Transparent answers regarding program format, prerequisites, scheduling, and project execution.
          </p>
        </div>

        {/* 10 FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {AI_ENGINEERING_COURSE.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? "bg-[#181B20] border-[#C5A253]/35 shadow-md"
                    : "bg-[#16181C] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-white/[0.05] text-[#C5A253] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-md text-gray-400 ml-4 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C5A253]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/[0.06] text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help prompt */}
        <div className="max-w-3xl mx-auto mt-12 text-center text-xs font-mono text-gray-400">
          Have an unlisted question? Reach our academic counselors during interest registration.
        </div>
      </div>
    </section>
  );
};

export default CourseFAQSection;
