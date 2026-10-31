import React from "react";
import logoImg from "@/assets/nextgen-scholars-logo.jpg";

interface NextGenLogoProps {
  variant?: "full" | "emblem" | "text-only";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean;
}

export const NextGenLogo: React.FC<NextGenLogoProps> = ({
  variant = "full",
  size = "md",
  className = "",
  inverted = false,
}) => {
  // Height presets
  const heightClasses = {
    sm: "h-8",
    md: "h-11",
    lg: "h-16",
    xl: "h-20",
  }[size];

  if (variant === "full") {
    return (
      <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
        <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
          <img
            src={logoImg}
            alt="NextGen Scholars - Learn Today • Lead Tomorrow"
            className={`${heightClasses} w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(197,162,83,0.25)] rounded-md`}
          />
        </div>
      </div>
    );
  }

  if (variant === "emblem") {
    return (
      <div className={`inline-flex items-center justify-center select-none group ${className}`}>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1C1F] to-[#111214] p-1.5 border border-[#C5A253]/30 shadow-[0_0_15px_rgba(197,162,83,0.2)]">
          <img
            src={logoImg}
            alt="NextGen Scholars Emblem"
            className={`${heightClasses} w-auto object-contain rounded`}
          />
        </div>
      </div>
    );
  }

  // Text-only fallback
  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight font-sans">
        <span className={inverted ? "text-white" : "text-[#111214]"}>NextGen</span>
        <span className="dls-text-metallic">Scholars</span>
      </div>
      <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C5A253] uppercase">
        Learn Today • Lead Tomorrow
      </span>
    </div>
  );
};

export default NextGenLogo;
