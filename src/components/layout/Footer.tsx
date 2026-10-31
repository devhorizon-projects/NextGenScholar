import React from "react";
import { ArrowUpRight, Code2, MapPin } from "lucide-react";
import { DevHorizonButton, DevHorizonBadge } from "@devhorizon/dls";
import NextGenLogo from "../ui/NextGenLogo";
import { BRAND_INFO } from "../../data/mockData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E1012] border-t border-white/10 text-gray-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <NextGenLogo variant="full" size="md" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {BRAND_INFO.subheading}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <DevHorizonBadge variant="silver" size="sm">
                Learn today • Lead tomorrow
              </DevHorizonBadge>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A253]" />
              <span>{BRAND_INFO.headquarters}</span>
            </div>
          </div>

          {/* Specialized Courses */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Specialized Courses
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  AI Engineering and Generative AI
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Cyber Security and Ethical Hacking using AI
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Tech Dispatch
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Receive weekly tech deep-dives, architectural breakdowns, and cohort updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to NextGen Scholar Tech Dispatch!");
              }}
              className="space-y-2"
            >
              <input
                type="email"
                required
                placeholder="developer@domain.com"
                className="w-full px-3.5 py-2 rounded-xl bg-[#1C1F23] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#C5A253]"
              />
              <DevHorizonButton
                type="submit"
                variant="secondary"
                size="sm"
                showArrow
                className="w-full text-xs"
              >
                Subscribe Dispatch
              </DevHorizonButton>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 NextGen Scholars. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#C5A253] font-semibold">Learn today • Lead tomorrow</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Honor Code</a>
            <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
