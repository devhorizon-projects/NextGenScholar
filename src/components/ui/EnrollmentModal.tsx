import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Terminal, Code2, BookOpen } from "lucide-react";
import confetti from "canvas-confetti";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";
import { MOCK_COURSES } from "../../data/mockData";
import { EnrollmentFormData } from "../../types";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState("");

  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    courseId: defaultCourseId || MOCK_COURSES[0].id,
    experienceLevel: "Intermediate Developer",
    learningGoal: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const newId = `NGS-TECH-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnrollmentId(newId);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#C5A253", "#E6CA83", "#FFFFFF", "#C7C9CC"],
        });
      } catch (err) {
        // fallback
      }
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      courseId: defaultCourseId || MOCK_COURSES[0].id,
      experienceLevel: "Intermediate Developer",
      learningGoal: "",
    });
    onClose();
  };

  const selectedCourse = MOCK_COURSES.find((c) => c.id === formData.courseId) || MOCK_COURSES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#181A1D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141517]">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#C5A253]" />
            <span className="text-sm font-bold tracking-tight text-white font-sans">
              NextGen Scholars • Course Enrollment
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-[#C5A253] font-bold">
                  Step {step} of 2: {step === 1 ? "Select Course & Details" : "Your Learning Goals"}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-sans">
                  {step === 1 ? "Choose Your Engineering Track" : "Tell Us About Your Tech Aspirations"}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                        Selected Course *
                      </label>
                      <select
                        name="courseId"
                        value={formData.courseId}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24272B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A253] transition-colors"
                      >
                        {MOCK_COURSES.map((course) => (
                          <option key={course.id} value={course.id} className="bg-[#181A1D]">
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24272B] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C5A253]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#24272B] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C5A253]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 012-3456"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#24272B] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C5A253]"
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                        Current Experience Level *
                      </label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24272B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A253]"
                      >
                        <option value="Beginner / Student">Beginner / Student exploring tech</option>
                        <option value="Intermediate Developer">Intermediate Developer (1-3 yrs experience)</option>
                        <option value="Senior Developer / Lead">Senior Developer / Tech Lead (3+ yrs experience)</option>
                        <option value="Career Switcher">Career Switcher into Tech</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#D4D8DE] uppercase tracking-wider mb-1.5">
                        What tech skills or projects do you want to build? *
                      </label>
                      <textarea
                        name="learningGoal"
                        required
                        rows={4}
                        value={formData.learningGoal}
                        onChange={handleChange}
                        placeholder="Tell us what you want to achieve through this course and how you plan to contribute to the tech community..."
                        className="w-full px-4 py-3 rounded-xl bg-[#24272B] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C5A253] resize-none"
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#C5A253] shrink-0 mt-0.5" />
                      <span>
                        Theme: <strong>"Learn today • Lead tomorrow"</strong>. You will receive cohort onboarding details within 24 hours.
                      </span>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <DevHorizonButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="!bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] font-bold"
                  >
                    {step === 1 ? "Next: Learning Goals" : "Complete Enrollment"}
                  </DevHorizonButton>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <DevHorizonBadge variant="silver" className="mb-3">
                  Enrollment Registered
                </DevHorizonBadge>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Welcome, {formData.fullName}!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto mt-2 leading-relaxed">
                  You are registered for <strong className="text-white">{selectedCourse.title}</strong>. Our admissions mentor will contact you at <strong className="text-white">{formData.email}</strong> with cohort access.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#24272B] border border-white/10 max-w-sm mx-auto text-left">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                  Enrollment Dossier Reference
                </div>
                <div className="text-lg font-mono font-bold text-[#E6CA83]">
                  {enrollmentId}
                </div>
              </div>

              <div className="pt-4">
                <DevHorizonButton
                  variant="secondary"
                  size="md"
                  onClick={handleReset}
                >
                  Return to Home
                </DevHorizonButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
