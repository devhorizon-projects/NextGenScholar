import React from "react";
import { DevHorizonBadge } from "@devhorizon/dls";
import { MOCK_MENTORS } from "../../data/mockData";
import { Terminal, Code2 } from "lucide-react";

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-24 bg-[#141619] text-[#D4D8DE] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <DevHorizonBadge variant="silver" size="sm" showDot className="mb-4">
              Industry Practitioners
            </DevHorizonBadge>
            <h2 className="dls-section-title">
              Mentorship from Veteran Engineers
            </h2>
            <p className="text-sm sm:text-base text-[#8E95A0] mt-3 leading-relaxed">
              Learn directly from senior practitioners who build, scale, and secure production systems every day. Receive personalized code feedback, architecture reviews, and career grooming.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#C5A253]">
            <Terminal className="w-4 h-4" />
            <span>Real-World Engineering Standards</span>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_MENTORS.map((m) => (
            <div
              key={m.id}
              className="group bg-[#1E2124] rounded-3xl border border-white/8 p-8 transition-all duration-300 hover:border-[#C5A253]/40 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full rounded-xl overflow-hidden mb-5 bg-[#141517]">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2124] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#E8EAED] border border-white/10">
                    {m.company}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans group-hover:text-[#E6CA83] transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs text-[#C5A253] font-mono mt-0.5 mb-3">{m.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{m.bio}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
                  {m.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {exp}
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

export default MentorsSection;
