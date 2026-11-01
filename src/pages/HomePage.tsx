import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import CoursesSection from "../components/sections/CoursesSection";
import MentorsSection from "../components/sections/MentorsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import EnrollmentCTASection from "../components/sections/EnrollmentCTASection";
import EnrollmentModal from "../components/ui/EnrollmentModal";
import CourseDetailModal from "../components/ui/CourseDetailModal";
import { CourseItem } from "../types";

export const HomePage: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);
  const [inspectedCourse, setInspectedCourse] = useState<CourseItem | null>(null);

  const handleOpenEnroll = (courseId?: string) => {
    setSelectedCourseForEnroll(courseId);
    setIsEnrollModalOpen(true);
  };

  const handleSelectCourse = (course: CourseItem) => {
    setInspectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-[#111214] text-[#D4D8DE] font-sans antialiased selection:bg-[#C5A253] selection:text-[#111214]">
      {/* Top Navbar */}
      <Navbar onOpenEnroll={() => handleOpenEnroll()} />

      <main>
        {/* Dark Obsidian Hero (No center logo, No stats, No admission badge) */}
        <HeroSection onOpenEnroll={() => handleOpenEnroll()} />

        {/* White Architectural Section: 3 Specialized Courses */}
        <CoursesSection onSelectCourse={handleSelectCourse} />

        {/* Veteran Tech Mentors & Practitioners */}
        <MentorsSection />

        {/* Learner Tech Impact & Success Stories */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Enrollment CTA Banner */}
        <EnrollmentCTASection onOpenEnroll={() => handleOpenEnroll()} />
      </main>

      {/* Rich Footer */}
      <Footer />

      {/* Interactive Course Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseId={selectedCourseForEnroll}
      />

      {/* In-depth Course Curriculum & Syllabus Modal */}
      <CourseDetailModal
        course={inspectedCourse}
        onClose={() => setInspectedCourse(null)}
        onEnroll={(courseId) => handleOpenEnroll(courseId)}
      />
    </div>
  );
};

export default HomePage;
