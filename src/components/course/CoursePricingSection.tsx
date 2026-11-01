import React from "react";
import { Check, Sparkles, ShieldCheck, Zap, Clock, Users, ArrowRight } from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";

interface CoursePricingSectionProps {
  onEnrollClick: (tier: "early-bird" | "standard") => void;
}

export const CoursePricingSection: React.FC<CoursePricingSectionProps> = ({ onEnrollClick }) => {
  return (
    <section id="pricing" className="py-24 bg-[#111214] border-t border-white/10 text-white relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A253]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A253]/10 border border-[#C5A253]/20 text-[#E6CA83] text-xs font-mono uppercase tracking-widest">
            Investment & Tuition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent, Value-Focused Pricing
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            One comprehensive price covering 72 hours of live instruction, hands-on labs, 4 guided projects, and 1-on-1 capstone reviews. No hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Card 1: Early-Bird Inaugural Offer (Featured) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1C1F25] to-[#15171B] border-2 border-[#C5A253] p-8 sm:p-10 shadow-[0_8px_32px_rgba(197,162,83,0.2)] flex flex-col justify-between">
            {/* Top Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#8D6A2C] via-[#E6CA83] to-[#B18A43] text-[#111214] font-bold text-xs uppercase tracking-wider shadow-md">
              Limited Inaugural Cohort • Save ₹10,000
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <span className="text-xs font-mono text-[#E6CA83] uppercase tracking-wider font-semibold">
                  Priority Enrollment
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Early-Bird Admission
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  For college students and early-applying professionals.
                </p>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 pt-2 pb-4 border-b border-white/10">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  ₹19,999
                </span>
                <span className="text-lg text-gray-500 line-through font-mono">
                  ₹29,999
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  (33% OFF)
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="font-mono text-gray-400 uppercase text-[11px] tracking-wider mb-2">
                  Everything Included:
                </div>
                {[
                  "Complete 72 Hours of live, instructor-led sessions",
                  "All 11 modules from Python basics to cloud deployment",
                  "Guided hands-on coding labs & 4 portfolio projects",
                  "1-on-1 milestone reviews on your Capstone Project",
                  "Mentorship from industry practitioners with 4+ yrs experience",
                  "Lifetime access to curated code repositories & architectures",
                  "Verified NextGen Scholars Course Completion Certificate",
                  "Cohort Discord community & peer discussion forum",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <DevHorizonButton
                variant="primary"
                size="lg"
                onClick={() => onEnrollClick("early-bird")}
                trailingIcon={<Sparkles className="w-4 h-4 text-[#111214]" />}
                className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] shadow-[0_4px_24px_rgba(197,162,83,0.35)] hover:shadow-[0_6px_30px_rgba(197,162,83,0.5)] cursor-pointer py-3.5 text-sm"
              >
                Enroll Now (Early-Bird ₹19,999)
              </DevHorizonButton>
              <p className="text-[11px] text-center text-gray-400 font-mono mt-2">
                Limited seats available for upcoming cohort
              </p>
            </div>
          </div>

          {/* Card 2: Standard Plan */}
          <div className="rounded-3xl bg-[#16181C] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                  Standard Access
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Regular Tuition
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Full access at regular enrollment schedule.
                </p>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 pt-2 pb-4 border-b border-white/10">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  ₹29,999
                </span>
                <span className="text-xs font-mono text-gray-400">
                  Total Program Fee
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="font-mono text-gray-400 uppercase text-[11px] tracking-wider mb-2">
                  Program Includes:
                </div>
                {[
                  "Full 72 Hours of live instruction",
                  "Access to all 11 curriculum modules",
                  "Guided coding labs & repository access",
                  "Capstone project submission and review",
                  "Verified NextGen Scholars Certificate",
                  "Cohort discussion & Q&A sessions",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-white/10 text-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <DevHorizonButton
                variant="secondary"
                size="lg"
                onClick={() => onEnrollClick("standard")}
                trailingIcon={<ArrowRight className="w-4 h-4 text-white" />}
                className="w-full text-white border-white/20 hover:border-white/40 hover:bg-white/5 cursor-pointer py-3.5 text-sm"
              >
                Enroll at Standard Fee (₹29,999)
              </DevHorizonButton>
              <p className="text-[11px] text-center text-gray-500 font-mono mt-2">
                Applicable after early-bird quota ends
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance strip */}
        <div className="mt-14 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Secure Registration
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C5A253]" />
            72 Planned Hours of Learning
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#E6CA83]" />
            Small Interactive Batches
          </span>
        </div>
      </div>
    </section>
  );
};

export default CoursePricingSection;
