import React from "react";
import { Cpu, Layers, Shield, CheckCircle2 } from "lucide-react";
import { DevHorizonServiceCard } from "@devhorizon/dls";
import { MOCK_COURSES } from "../../data/mockData";
import { CourseItem } from "../../types";

interface CoursesSectionProps {
  onSelectCourse: (course: CourseItem) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
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
              3 Comprehensive Courses
            </span>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#8D6A2C]/10 text-[#8D6A2C] font-bold">
              Learn Today • Lead Tomorrow
            </span>
          </div>
        </div>

        {/* 3 Courses Grid using DevHorizonServiceCard (WhiteServiceCard) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course) => (
            <div key={course.id} className="flex flex-col justify-between">
              <DevHorizonServiceCard
                icon={getIcon(course.iconName)}
                title={course.title}
                description={course.description}
                badge={course.badge || course.duration}
                linkText="View Full Syllabus & Skills"
                onLinkClick={() => onSelectCourse(course)}
                className="h-full hover:border-[#C5A253]/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-8px_rgba(197,162,83,0.15)]"
              />

              {/* Course Highlights & Outcome */}
              <div className="mt-4 p-4 rounded-xl bg-[#F8F9FA] border border-black/5 text-xs text-[#5F6672] space-y-2">
                <div className="font-semibold text-[#0E1012] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{course.keyOutcome}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.skills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#34363A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
