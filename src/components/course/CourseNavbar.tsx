import React, { useState, useEffect } from "react";
import { ArrowLeft, Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";
import NextGenLogo from "../ui/NextGenLogo";

interface CourseNavbarProps {
  onRegisterClick?: () => void;
}

export const CourseNavbar: React.FC<CourseNavbarProps> = ({ onRegisterClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Overview", id: "why-this-course" },
    { name: "Audience", id: "audience" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQs", id: "faqs" },
  ];

  const handleRegister = () => {
    setMobileMenuOpen(false);
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      scrollTo("pricing");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#111214]/94 backdrop-blur-md border-b border-white/10 shadow-xl py-3"
          : "bg-[#111214]/80 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Home Return & Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-gray-300 hover:text-white transition-colors border border-white/10"
              title="Return to NextGen Scholars Home"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C5A253]" />
              <span className="hidden sm:inline">All Programs</span>
            </Link>

            <Link to="/" className="flex items-center focus:outline-none">
              <NextGenLogo variant="full" size="sm" />
            </Link>

            <div className="hidden xl:block">
              <DevHorizonBadge variant="silver" size="sm">
                AI Engineering Track
              </DevHorizonBadge>
            </div>
          </div>

          {/* Center: Course In-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-xs font-semibold uppercase tracking-wider text-[#C7C9CC] hover:text-white transition-colors py-1 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right: Registration CTA */}
          <div className="flex items-center gap-3">
            <DevHorizonButton
              variant="primary"
              size="sm"
              onClick={handleRegister}
              trailingIcon={<Sparkles className="w-3.5 h-3.5 text-[#111214]" />}
              className="!bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] font-bold shadow-[0_2px_14px_rgba(197,162,83,0.3)] hover:shadow-[0_4px_20px_rgba(197,162,83,0.45)] cursor-pointer text-xs"
            >
              Enroll Now
            </DevHorizonButton>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141517] border-b border-white/10 px-6 py-6 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-mono text-[#E6CA83] pb-3 border-b border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Website</span>
          </Link>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10">
            <DevHorizonButton
              variant="primary"
              size="md"
              onClick={handleRegister}
              className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214]"
            >
              Enroll Now
            </DevHorizonButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default CourseNavbar;
