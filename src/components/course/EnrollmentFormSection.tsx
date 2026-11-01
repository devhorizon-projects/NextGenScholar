import React, { useState } from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Mail, Phone, User, Briefcase, Target, ArrowRight } from "lucide-react";
import { DevHorizonButton } from "@devhorizon/dls";
import { LearnerCategory, AI_ENGINEERING_COURSE } from "../../data/courseData";

export interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  learnerCategory: LearnerCategory | "";
  currentRoleOrCollege: string;
  primaryObjective: string;
  consent: boolean;
}

export const EnrollmentFormSection: React.FC = () => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    learnerCategory: "",
    currentRoleOrCollege: "",
    primaryObjective: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnrollmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnrollmentFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number with at least 10 digits.";
    }

    if (!formData.learnerCategory) {
      newErrors.learnerCategory = "Please select whether you are a College Student or Working Professional.";
    }

    if (!formData.currentRoleOrCollege.trim() || formData.currentRoleOrCollege.trim().length < 2) {
      newErrors.currentRoleOrCollege = "Please specify your college, university, or current professional role.";
    }

    if (!formData.primaryObjective) {
      newErrors.primaryObjective = "Please select your primary learning objective.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to receive cohort updates to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief API registration processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);

      // Save submission locally for persistence
      try {
        const stored = JSON.parse(localStorage.getItem("ngs_interest_registrations") || "[]");
        stored.push({
          ...formData,
          courseId: AI_ENGINEERING_COURSE.id,
          courseTitle: AI_ENGINEERING_COURSE.title,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem("ngs_interest_registrations", JSON.stringify(stored));
      } catch (err) {
        console.error("Local storage error:", err);
      }
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      learnerCategory: "",
      currentRoleOrCollege: "",
      primaryObjective: "",
      consent: false,
    });
    setErrors({});
    setIsSuccessModalOpen(false);
  };

  return (
    <section id="register" className="py-24 bg-[#111214] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            Cohort Registration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Register Your Interest
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Reserve your priority notification for the upcoming 2026 cohort. Official batch dates and enrollment procedures will be sent directly to your email.
          </p>
        </div>

        {/* Lead Capture Form Card */}
        <div className="max-w-3xl mx-auto bg-[#16181D] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                Full Name <span className="text-[#C5A253]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1F25] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.fullName ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Email Address <span className="text-[#C5A253]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1F25] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Phone Number <span className="text-[#C5A253]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1F25] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.phone ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>}
              </div>
            </div>

            {/* Learner Category Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                Learner Category <span className="text-[#C5A253]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, learnerCategory: "College Student" })}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    formData.learnerCategory === "College Student"
                      ? "bg-[#C5A253]/15 border-[#C5A253] text-[#E6CA83]"
                      : "bg-[#1C1F25] border-white/10 text-gray-300 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold">College Student</div>
                  <div className="text-xs font-normal text-gray-400 mt-0.5">
                    Currently pursuing undergraduate or postgraduate degree
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, learnerCategory: "Working Professional" })}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    formData.learnerCategory === "Working Professional"
                      ? "bg-[#C5A253]/15 border-[#C5A253] text-[#E6CA83]"
                      : "bg-[#1C1F25] border-white/10 text-gray-300 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold">Working Professional</div>
                  <div className="text-xs font-normal text-gray-400 mt-0.5">
                    Currently employed software engineer or tech specialist
                  </div>
                </button>
              </div>
              {errors.learnerCategory && (
                <p className="text-xs text-red-400 mt-1.5">{errors.learnerCategory}</p>
              )}
            </div>

            {/* Current Role or College */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                Current Role / College / Background <span className="text-[#C5A253]">*</span>
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. 3rd Year B.Tech CSE or Backend Developer at Tech Corp"
                  value={formData.currentRoleOrCollege}
                  onChange={(e) => setFormData({ ...formData, currentRoleOrCollege: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1F25] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.currentRoleOrCollege ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                  }`}
                />
              </div>
              {errors.currentRoleOrCollege && (
                <p className="text-xs text-red-400 mt-1.5">{errors.currentRoleOrCollege}</p>
              )}
            </div>

            {/* Primary Learning Objective */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                Primary Learning Objective <span className="text-[#C5A253]">*</span>
              </label>
              <div className="relative">
                <Target className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.primaryObjective}
                  onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1F25] border text-sm text-white focus:outline-none transition-colors ${
                    errors.primaryObjective ? "border-red-500" : "border-white/10 focus:border-[#C5A253]"
                  }`}
                >
                  <option value="" disabled className="bg-[#1C1F25] text-gray-500">
                    Select your main goal...
                  </option>
                  <option value="Portfolio Building" className="bg-[#1C1F25]">
                    Portfolio Building with Deployable AI Projects
                  </option>
                  <option value="Career Transition" className="bg-[#1C1F25]">
                    Career Transition into AI Engineering
                  </option>
                  <option value="Upskilling for Current Role" className="bg-[#1C1F25]">
                    Upskilling for Current Engineering Role
                  </option>
                  <option value="Building an AI Product" className="bg-[#1C1F25]">
                    Building an AI Product or Startup
                  </option>
                  <option value="Other Technical Interest" className="bg-[#1C1F25]">
                    Other Technical Development
                  </option>
                </select>
              </div>
              {errors.primaryObjective && (
                <p className="text-xs text-red-400 mt-1.5">{errors.primaryObjective}</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-[#1C1F25] text-[#C5A253] focus:ring-[#C5A253] focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-xs text-gray-300 leading-relaxed">
                  I agree to receive course updates, schedule notices, and educational communications from Next Gen Scholars regarding the AI Engineering program.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-400 mt-1.5">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <DevHorizonButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                trailingIcon={<Sparkles className="w-4 h-4 text-[#111214]" />}
                className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] shadow-[0_4px_24px_rgba(197,162,83,0.35)] cursor-pointer"
              >
                {isSubmitting ? "Registering Interest..." : "Submit Registration of Interest"}
              </DevHorizonButton>
            </div>

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Your contact details are strictly confidential. No spam policy.</span>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#181B20] border border-[#C5A253]/40 rounded-3xl p-8 max-w-lg w-full shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#E6CA83] uppercase tracking-wider">
                Interest Received
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Your interest in the <strong className="text-white">AI Engineering & Generative AI</strong> program has been successfully recorded.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 text-left space-y-2 font-mono">
              <div className="text-gray-400 uppercase tracking-wider text-[10px]">What happens next:</div>
              <ul className="space-y-1.5 list-disc list-inside text-gray-300">
                <li>You will receive an email confirmation at {formData.email}.</li>
                <li>Upcoming batch dates and session schedules will be sent once confirmed.</li>
                <li>You'll get priority enrollment window access before public opening.</li>
              </ul>
            </div>

            <DevHorizonButton
              variant="primary"
              size="md"
              onClick={handleReset}
              className="w-full font-bold !bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214]"
            >
              Done & Return
            </DevHorizonButton>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnrollmentFormSection;
