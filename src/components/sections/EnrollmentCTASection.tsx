import React from "react";
import { ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";

interface EnrollmentCTASectionProps {
  onOpenEnroll: () => void;
}

export const EnrollmentCTASection: React.FC<EnrollmentCTASectionProps> = ({
  onOpenEnroll,
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#141619] to-[#0E1012] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A253]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <DevHorizonBadge variant="silver" size="md" showDot>
          Learn Today • Lead Tomorrow
        </DevHorizonBadge>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
          Ready to Groom Your Skills &{" "}
          <span className="bg-gradient-to-r from-[#C5A253] via-[#E6CA83] to-[#B18A43] bg-clip-text text-transparent">
            Contribute to Modern Tech?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Step into a curriculum engineered for real software building. Master AI Engineering, Full Stack Development, or Cyber Security under senior tech mentors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <DevHorizonButton
            variant="primary"
            size="lg"
            showArrow
            onClick={onOpenEnroll}
            className="w-full sm:w-auto !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] font-bold shadow-[0_4px_30px_rgba(197,162,83,0.45)] hover:shadow-[0_6px_36px_rgba(197,162,83,0.65)]"
          >
            Enroll in NextGen Cohort
          </DevHorizonButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#C5A253]" />
            Hands-on Portfolio Capstones
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-emerald-400" />
            1-on-1 Code & Architecture Reviews
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#E6CA83]" />
            Open Source & Industry Impact
          </span>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentCTASection;
