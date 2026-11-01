import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Clock, Layers, Award, ShieldCheck, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";
import { CourseItem } from "../../types";

interface CourseDetailModalProps {
  course: CourseItem | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  const navigate = useNavigate();
  if (!course) return null;

  const isFlagshipAi = course.id === "course-ai-genai";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#181A1D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141517]">
          <div className="flex items-center gap-2">
            <DevHorizonBadge variant="silver" size="sm">
              {course.level}
            </DevHorizonBadge>
            <span className="text-xs text-gray-400 font-mono">
              {course.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
              <Clock className="w-4 h-4 text-[#C5A253] mx-auto mb-1" />
              <div className="text-[11px] text-gray-400">Duration</div>
              <div className="text-xs font-bold text-white mt-0.5">{course.duration}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
              <Award className="w-4 h-4 text-[#C5A253] mx-auto mb-1" />
              <div className="text-[11px] text-gray-400">Capstone Goal</div>
              <div className="text-xs font-bold text-white mt-0.5">Production Portfolio</div>
            </div>
          </div>

          {/* Course Modules & Syllabus */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A253] mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Curriculum Modules</span>
            </h4>
            <div className="space-y-2">
              {course.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#24272B] border border-white/5 text-xs text-gray-300"
                >
                  <span className="font-mono text-[#C5A253] font-bold text-[11px] shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Mastered */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A253] mb-2">
              Skills Groomed
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#24272B] text-white border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome banner */}
          <div className="p-4 rounded-xl bg-[#C5A253]/10 border border-[#C5A253]/20 flex items-center gap-3 text-xs text-[#E6CA83]">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <div>
              <div className="font-bold">Key Deliverable:</div>
              <div>{course.keyOutcome}</div>
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white"
              >
                Close
              </button>
              {isFlagshipAi && (
                <button
                  onClick={() => {
                    onClose();
                    navigate("/course/ai-engineering-generative-ai");
                  }}
                  className="px-3 py-2 text-xs font-mono text-[#E6CA83] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A253]" />
                  <span>View Dedicated Course Page</span>
                </button>
              )}
            </div>
            <DevHorizonButton
              variant="primary"
              size="md"
              showArrow
              className="!bg-gradient-to-r !from-[#8D6A2C] !via-[#E6CA83] !to-[#B18A43] !text-[#111214] font-bold"
              onClick={() => {
                onClose();
                onEnroll(course.id);
              }}
            >
              Enroll in This Course
            </DevHorizonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;
