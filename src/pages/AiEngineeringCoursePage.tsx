import React, { useState, useEffect } from "react";
import CourseNavbar from "../components/course/CourseNavbar";
import CourseHero from "../components/course/CourseHero";
import WhyThisCourse from "../components/course/WhyThisCourse";
import AudienceSection from "../components/course/AudienceSection";
import CurriculumSection from "../components/course/CurriculumSection";
import CoursePricingSection from "../components/course/CoursePricingSection";
import AiCourseEnrollModal from "../components/course/AiCourseEnrollModal";
import CourseFAQSection from "../components/course/CourseFAQSection";
import Footer from "../components/layout/Footer";

export const AiEngineeringCoursePage: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<"early-bird" | "standard">("early-bird");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenEnroll = (tier: "early-bird" | "standard" = "early-bird") => {
    setSelectedTier(tier);
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111214] text-[#D4D8DE] font-sans antialiased selection:bg-[#C5A253] selection:text-[#111214]">
      {/* Course Navigation */}
      <CourseNavbar onRegisterClick={() => handleOpenEnroll("early-bird")} />

      <main>
        {/* Course Hero with Quick Stats & Direct CTAs */}
        <CourseHero onRegisterClick={() => handleOpenEnroll("early-bird")} />

        {/* Why Next Gen Scholars AI Engineering */}
        <WhyThisCourse />

        {/* Target Audience: Students vs Professionals */}
        <AudienceSection />

        {/* 72-Hour Structured Curriculum */}
        <CurriculumSection />

        {/* Featured Simple Pricing Section with Direct Enroll Actions */}
        <CoursePricingSection onEnrollClick={(tier) => handleOpenEnroll(tier)} />

        {/* FAQs */}
        <CourseFAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Course Enrollment Form Modal (AI Engineering Only) */}
      <AiCourseEnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        initialTier={selectedTier}
      />
    </div>
  );
};

export default AiEngineeringCoursePage;
