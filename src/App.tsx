import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AiEngineeringCoursePage from "./pages/AiEngineeringCoursePage";

export const App: React.FC = () => {
  return (
    <Routes>
      {/* Primary Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Dedicated Flagship AI Engineering & Generative AI Course Page */}
      <Route path="/course/ai-engineering-generative-ai" element={<AiEngineeringCoursePage />} />
      <Route path="/courses/ai-engineering-generative-ai" element={<AiEngineeringCoursePage />} />

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
