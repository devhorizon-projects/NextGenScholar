import React, { useState } from "react";
import { DevHorizonBadge } from "@devhorizon/dls";
import { FAQS } from "../../data/mockData";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-[#111315] text-[#D4D8DE] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <DevHorizonBadge variant="silver" size="sm" showDot className="mb-4">
            Fellowship Advisory
          </DevHorizonBadge>
          <h2 className="dls-section-title">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#8E95A0] mt-3">
            Key details regarding endowment disbursement, academic eligibility, and residency expectations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1A1C1F] border border-white/8 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-sm sm:text-base font-bold text-white font-sans hover:text-[#E6CA83] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A253] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
