import React from "react";
import { ArrowRight, Code2, Terminal, Cpu } from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";

interface HeroSectionProps {
  onOpenEnroll: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#111214]">
      {/* Radial Gold & Silver Ambient Glow Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#C5A253]/15 via-[#C7C9CC]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#8D6A2C]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#E8EAED]/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2">
            <DevHorizonBadge variant="silver" size="md" showDot>
              Learn Today • Lead Tomorrow
            </DevHorizonBadge>
          </div>

          {/* Hero Headline */}
          <h1 className="dls-display-title">
            Grooming High-Impact{" "}
            <span className="dls-text-metallic">Tech Leaders</span> To{" "}
            <span className="bg-gradient-to-r from-[#C5A253] via-[#E6CA83] to-[#B18A43] bg-clip-text text-transparent">
              Build The Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#C7C9CC] max-w-2xl mx-auto font-sans leading-relaxed">
            Not about passive lectures or theoretical research—this is all about deep, hands-on learning, intensive skill grooming, and building production-ready systems that contribute directly to the global tech ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#courses" className="w-full sm:w-auto">
              <DevHorizonButton
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] font-bold shadow-[0_4px_25px_rgba(197,162,83,0.4)] hover:shadow-[0_6px_30px_rgba(197,162,83,0.6)]"
              >
                Explore Specialized Courses
              </DevHorizonButton>
            </a>

            <DevHorizonButton
              variant="secondary"
              size="lg"
              onClick={onOpenEnroll}
              className="w-full sm:w-auto"
            >
              Enroll for Next Cohort
            </DevHorizonButton>
          </div>

          {/* Pillars of Practical Learning */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-xs text-[#8E95A0]">
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#C5A253]" />
              100% Project-Driven Curriculum
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              Real-World Tech Contributions
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#E8EAED]" />
              Mentorship from Industry Practitioners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
