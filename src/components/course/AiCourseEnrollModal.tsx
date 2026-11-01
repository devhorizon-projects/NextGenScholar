import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, User, Mail, Phone, Briefcase, Target, ShieldCheck, Cpu } from "lucide-react";
import confetti from "canvas-confetti";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";

interface AiCourseEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: "early-bird" | "standard";
}

export const AiCourseEnrollModal: React.FC<AiCourseEnrollModalProps> = ({
  isOpen,
  onClose,
  initialTier = "early-bird",
}) => {
  const [tier, setTier] = useState<"early-bird" | "standard">(initialTier);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    learnerCategory: "College Student",
    currentRoleOrCollege: "",
    primaryObjective: "Portfolio Building with Deployable AI Projects",
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (!formData.currentRoleOrCollege.trim()) {
      errs.currentRoleOrCollege = "Please specify your college or current role.";
    }

    if (!formData.consent) {
      errs.consent = "You must agree to receive cohort updates.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newId = `NGS-AI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(newId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C5A253", "#E6CA83", "#FFFFFF", "#8D6A2C"],
      });
    } catch {
      // ignore
    }

    try {
      const stored = JSON.parse(localStorage.getItem("ngs_ai_enrollments") || "[]");
      stored.push({
        ...formData,
        tier,
        course: "AI Engineering & Generative AI",
        submissionId: newId,
        date: new Date().toISOString(),
      });
      localStorage.setItem("ngs_ai_enrollments", JSON.stringify(stored));
    } catch {
      // ignore
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#17191D] border border-[#C5A253]/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#131518]">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#C5A253]" />
            <div>
              <span className="text-sm font-bold text-white tracking-tight">
                AI Engineering & Generative AI
              </span>
              <span className="hidden sm:inline text-xs text-gray-400 font-mono ml-2">
                • 72-Hour Cohort
              </span>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Locked Course Badge */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#E6CA83] uppercase tracking-wider font-semibold">
                    Enrolling In Program:
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    AI Engineering & Generative AI
                  </div>
                </div>
                <DevHorizonBadge variant="silver" size="sm">
                  8 Weeks • 72 Hours
                </DevHorizonBadge>
              </div>

              {/* Pricing Tier Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Select Admission Tier
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier("early-bird")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      tier === "early-bird"
                        ? "bg-[#C5A253]/15 border-[#C5A253] text-white"
                        : "bg-[#1F2228] border-white/10 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#E6CA83]">Early-Bird</span>
                      <span className="text-xs font-mono font-bold text-white">₹19,999</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Limited Inaugural Offer</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier("standard")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      tier === "standard"
                        ? "bg-[#C5A253]/15 border-[#C5A253] text-white"
                        : "bg-[#1F2228] border-white/10 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-300">Standard</span>
                      <span className="text-xs font-mono font-bold text-white">₹29,999</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Regular Cohort Tuition</div>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Full Name <span className="text-[#C5A253]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#202329] border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.fullName ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Email Address <span className="text-[#C5A253]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#202329] border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Phone Number <span className="text-[#C5A253]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#202329] border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Learner Category & Background */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Learner Profile <span className="text-[#C5A253]">*</span>
                  </label>
                  <select
                    value={formData.learnerCategory}
                    onChange={(e) => setFormData({ ...formData, learnerCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#202329] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A253]"
                  >
                    <option value="College Student">College Student</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    College or Current Role <span className="text-[#C5A253]">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3rd Year CSE / SWE"
                      value={formData.currentRoleOrCollege}
                      onChange={(e) => setFormData({ ...formData, currentRoleOrCollege: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#202329] border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.currentRoleOrCollege ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                      }`}
                    />
                  </div>
                  {errors.currentRoleOrCollege && (
                    <p className="text-xs text-red-400 mt-1">{errors.currentRoleOrCollege}</p>
                  )}
                </div>
              </div>

              {/* Primary Goal */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Primary Learning Objective
                </label>
                <div className="relative">
                  <Target className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.primaryObjective}
                    onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#202329] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A253]"
                  >
                    <option value="Portfolio Building with Deployable AI Projects">
                      Portfolio Building with Deployable AI Projects
                    </option>
                    <option value="Career Transition into AI Engineering">
                      Career Transition into AI Engineering
                    </option>
                    <option value="Upskilling for Current Engineering Role">
                      Upskilling for Current Engineering Role
                    </option>
                    <option value="Building an AI Product or Startup">
                      Building an AI Product or Startup
                    </option>
                  </select>
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-300">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#202329] text-[#C5A253]"
                  />
                  <span>
                    I confirm my application for the AI Engineering cohort and agree to receive schedule updates.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <DevHorizonButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  trailingIcon={<Sparkles className="w-4 h-4 text-[#111214]" />}
                  className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] shadow-[0_4px_24px_rgba(197,162,83,0.35)] cursor-pointer"
                >
                  Submit AI Engineering Enrollment ({tier === "early-bird" ? "₹19,999" : "₹29,999"})
                </DevHorizonButton>
              </div>

              <div className="text-center text-[11px] font-mono text-gray-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Exclusively for AI Engineering & Generative AI</span>
              </div>
            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[#E6CA83] uppercase tracking-wider">
                  Registration Successful • ID: {submissionId}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Welcome to AI Engineering, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-md mx-auto">
                  Your seat reservation for the <strong>AI Engineering & Generative AI</strong> program ({tier === "early-bird" ? "Early-Bird ₹19,999" : "Standard ₹29,999"}) has been received.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 text-left font-mono space-y-1.5">
                <div className="text-[#E6CA83] font-bold">Next Steps:</div>
                <div>1. Onboarding confirmation sent to <span className="text-white">{formData.email}</span>.</div>
                <div>2. Academic coordinator will confirm cohort dates and live link.</div>
                <div>3. Discord community access invite will follow.</div>
              </div>

              <DevHorizonButton
                variant="primary"
                size="md"
                onClick={handleResetAndClose}
                className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214]"
              >
                Close & Return
              </DevHorizonButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiCourseEnrollModal;
