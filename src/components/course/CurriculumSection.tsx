import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Search,
  BookOpen,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { AI_ENGINEERING_COURSE, CurriculumModule } from "../../data/courseData";

export const CurriculumSection: React.FC = () => {
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({ 1: true });
  const [searchQuery, setSearchQuery] = useState("");

  const totalCalculatedHours = useMemo(() => {
    return AI_ENGINEERING_COURSE.curriculum.reduce((acc, m) => acc + m.plannedHours, 0);
  }, []);

  const toggleModule = (id: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    AI_ENGINEERING_COURSE.curriculum.forEach((m) => {
      all[m.id] = true;
    });
    setOpenModules(all);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return AI_ENGINEERING_COURSE.curriculum;
    const q = searchQuery.toLowerCase();
    return AI_ENGINEERING_COURSE.curriculum.filter(
      (m) =>
        m.topic.toLowerCase().includes(q) ||
        m.number.toLowerCase().includes(q) ||
        m.importantConcepts.some((c) => c.toLowerCase().includes(q)) ||
        m.learningObjectives.some((o) => o.toLowerCase().includes(q)) ||
        m.handsOnActivities.some((h) => h.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <section id="curriculum" className="py-24 bg-[#141619] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A253]/10 border border-[#C5A253]/20 text-[#E6CA83] text-xs font-mono uppercase tracking-widest">
            Complete Technical Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive 72-Hour Curriculum
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            A carefully sequenced 11-module pathway progressing from foundational Python to autonomous agents, system evaluation, and cloud deployment.
          </p>

          {/* Validation Tally Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300">
            <span className="flex items-center gap-1.5 text-[#E6CA83] font-bold">
              <Clock className="w-4 h-4 text-[#C5A253]" />
              {totalCalculatedHours} Planned Hours
            </span>
            <span>•</span>
            <span>11 Structured Modules</span>
            <span>•</span>
            <span>8-Week Proposed Delivery</span>
          </div>
        </div>

        {/* Search & Bulk Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search concepts (e.g. RAG, Agents, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#1C1F23] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A253] transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 text-xs font-mono self-end sm:self-auto">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Modules Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredCurriculum.length === 0 ? (
            <div className="text-center py-12 rounded-2xl bg-[#1A1D22] border border-white/10 text-gray-400 text-sm">
              No modules found matching "{searchQuery}". Try searching for Python, RAG, or Docker.
            </div>
          ) : (
            filteredCurriculum.map((mod) => {
              const isOpen = !!openModules[mod.id];
              return (
                <div
                  key={mod.id}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? "bg-[#181B20] border-[#C5A253]/35 shadow-lg"
                      : "bg-[#16181C] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Module Accordion Header */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#E6CA83]">
                        {mod.id < 10 ? `0${mod.id}` : mod.id}
                      </span>
                      <div>
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                          {mod.number}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {mod.topic}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#E6CA83] whitespace-nowrap">
                        {mod.plannedHours} Hours
                      </span>
                      <div className="p-1 rounded-md text-gray-400">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#C5A253]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Module Expanded Details */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] space-y-6 text-sm">
                      {/* Learning Objectives */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#C5A253]" />
                          <span>Learning Objectives</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {mod.learningObjectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <span className="text-[#C5A253] mt-0.5">•</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Important Concepts */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#C5A253]" />
                          <span>Important Concepts Covered</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {mod.importantConcepts.map((concept, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-[#21252B] border border-white/10 text-xs text-gray-300 font-mono"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hands-on Activities */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Hands-on Exercises & Labs</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {mod.handsOnActivities.map((act, i) => (
                            <li
                              key={i}
                              className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2"
                            >
                              <Code2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expected Outcomes */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C5A253]" />
                          <span>Expected Learning Outcomes</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {mod.expectedOutcomes.map((out, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <span className="text-[#C5A253]">✓</span>
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
