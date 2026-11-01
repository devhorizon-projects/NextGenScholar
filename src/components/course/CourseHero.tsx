import React from "react";
import {
  Clock,
  Wifi,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";
import { AI_ENGINEERING_COURSE } from "../../data/courseData";

interface CourseHeroProps {
  onRegisterClick?: () => void;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ onRegisterClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRegister = () => {
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      scrollTo("register");
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-5 h-5 text-[#C5A253]" />,
    Wifi: <Wifi className="w-5 h-5 text-[#C5A253]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#C5A253]" />,
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#111214] text-white">
      {/* Background Subtle Tech Grid & Glow Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2329_1px,transparent_1px),linear-gradient(to_bottom,#1f2329_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-[#C5A253]/15 via-[#8D6A2C]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-gray-300">
              {AI_ENGINEERING_COURSE.launchState} • 2026 Flagship Cohort
            </span>
          </div>

          {/* Super Category / Program Title */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E6CA83] uppercase">
              <Code2 className="w-4 h-4 text-[#C5A253]" />
              <span>Flagship Industry Program</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 tracking-tight">
              {AI_ENGINEERING_COURSE.title}
            </h2>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Don't Just Use AI.{" "}
            <span className="bg-gradient-to-r from-[#E6CA83] via-[#C5A253] to-[#8D6A2C] bg-clip-text text-transparent">
              Learn to Engineer It.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            {AI_ENGINEERING_COURSE.supportingText}
          </p>

          {/* Quick Meta Pills Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-xs text-gray-300 font-mono">
            <span className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10">
              {AI_ENGINEERING_COURSE.delivery}
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10">
              {AI_ENGINEERING_COURSE.proposedSchedule} • {AI_ENGINEERING_COURSE.totalPlannedHours} Hours
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10">
              Level: Beginner to Intermediate
            </span>
            <span className="px-3 py-1 rounded-md bg-[#C5A253]/15 text-[#E6CA83] border border-[#C5A253]/30">
              Industry Practitioners (4+ Years Exp)
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <DevHorizonButton
              variant="primary"
              size="lg"
              onClick={handleRegister}
              trailingIcon={<Sparkles className="w-4 h-4 text-[#111214]" />}
              className="w-full sm:w-auto font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] shadow-[0_4px_24px_rgba(197,162,83,0.35)] hover:shadow-[0_6px_30px_rgba(197,162,83,0.5)] cursor-pointer"
            >
              Enroll Now (Early-Bird ₹19,999)
            </DevHorizonButton>

            <DevHorizonButton
              variant="secondary"
              size="lg"
              onClick={() => scrollTo("curriculum")}
              trailingIcon={<ArrowRight className="w-4 h-4 text-white" />}
              className="w-full sm:w-auto text-white border-white/20 hover:border-white/40 hover:bg-white/5 cursor-pointer"
            >
              Explore Curriculum
            </DevHorizonButton>
          </div>

          {/* Assurance line */}
          <p className="text-xs text-gray-400 font-mono">
            Upcoming Cohort • Limited inaugural seats available
          </p>
        </div>

        {/* 3 Core Highlights (Section A specifications) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 pt-12 border-t border-white/10">
          {AI_ENGINEERING_COURSE.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C5A253]/40 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1C1F23] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {iconMap[highlight.icon] || <Sparkles className="w-5 h-5 text-[#C5A253]" />}
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                {highlight.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
