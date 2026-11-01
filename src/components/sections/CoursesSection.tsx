import React from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Layers, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { DevHorizonServiceCard } from "@devhorizon/dls";
import { MOCK_COURSES } from "../../data/mockData";
import { CourseItem } from "../../types";

interface CoursesSectionProps {
  onSelectCourse: (course: CourseItem) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const navigate = useNavigate();

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "Shield":
        return <Shield className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <section id="courses" className="py-24 bg-white text-[#0E1012] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#8D6A2C] block mb-3">
              Specialized Engineering Curricula
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1012] font-sans">
              Master the Skills Dominating Modern Tech
            </h2>
            <p className="text-sm sm:text-base text-[#5F6672] mt-4 leading-relaxed">
              Every course is built around deliberate practice, code reviews from senior engineers, and shipping production-level systems that contribute value to the global software ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-black/5 text-[#0E1012] font-bold">
              Flagship Industry Program
            </span>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#8D6A2C]/10 text-[#8D6A2C] font-bold">
              Learn Today • Lead Tomorrow
            </span>
          </div>
        </div>

        {/* Flagship Course Showcase */}
        <div className="max-w-3xl mx-auto">
          {MOCK_COURSES.map((course) => {
            const isFlagshipAi = course.id === "course-ai-genai";

            return (
              <div key={course.id} className="flex flex-col justify-between">
                <DevHorizonServiceCard
                  icon={getIcon(course.iconName)}
                  title={course.title}
                  description={course.description}
                  badge="Flagship • 72 Hours"
                  linkText="Explore Dedicated Course Page →"
                  onLinkClick={() => {
                    navigate("/course/ai-engineering-generative-ai");
                  }}
                  className="h-full border-[#C5A253] ring-1 ring-[#C5A253]/30 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-8px_rgba(197,162,83,0.15)]"
                />

                {/* Course Highlights & Outcome */}
                <div className="mt-4 p-5 rounded-2xl bg-[#F8F9FA] border border-black/5 text-xs text-[#5F6672] space-y-3">
                  <div className="font-semibold text-[#0E1012] flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{course.keyOutcome}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {course.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/5 text-[#34363A]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => navigate("/course/ai-engineering-generative-ai")}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8D6A2C] via-[#E6CA83] to-[#B18A43] text-[#111214] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <span>Explore Full 72-Hour Course Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="py-3 px-4 rounded-xl bg-white border border-black/10 hover:border-black/20 text-[#0E1012] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Quick Syllabus Modal
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
