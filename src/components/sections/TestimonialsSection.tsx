import React from "react";
import { DevHorizonCard, DevHorizonBadge } from "@devhorizon/dls";
import { MOCK_STUDENT_STORIES } from "../../data/mockData";
import { Quote, Sparkles, Code2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#111315] text-[#D4D8DE] relative overflow-hidden">
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#C5A253]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <DevHorizonBadge variant="silver" size="sm" showDot className="mb-4">
            Learner Stories & Tech Impact
          </DevHorizonBadge>
          <h2 className="dls-section-title">
            From Learning to Leading in Tech
          </h2>
          <p className="text-sm sm:text-base text-[#8E95A0] mt-3 leading-relaxed">
            Discover how NextGen Scholars groomed their engineering skills, built production-level software, and are now shaping the global tech ecosystem.
          </p>
        </div>

        {/* Stories Grid using DevHorizonCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_STUDENT_STORIES.map((t) => (
            <DevHorizonCard
              key={t.id}
              className="flex flex-col justify-between hover:border-[#C5A253]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A253]/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">{t.name}</h4>
                      <p className="text-[11px] font-mono text-[#C5A253]">{t.role}</p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-white/20" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed mb-6 font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/8 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C7C9CC]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6CA83]" />
                  <span>{t.achievement}</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  Track: {t.course}
                </div>
              </div>
            </DevHorizonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
