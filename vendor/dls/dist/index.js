import e from "react";
import { ArrowRight as t } from "lucide-react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Link as i } from "react-router-dom";
// src/tokens.ts
var a = {
	primaryBackground: "#111315",
	surfaceCard: "#24272B",
	surfaceCardHover: "#2A2E33",
	surfaceElevated: "#1A1C1F",
	textLight: "#D4D8DE",
	textMuted: "#8E95A0",
	textSubtle: "#626873",
	shiningSilver: "#E8EAED",
	secondaryPlatinum: "#C0C5CC",
	brightWhite: "#FFFFFF",
	whiteSectionBg: "#FFFFFF",
	whiteSectionSurface: "#F8F9FA",
	whiteSectionBorder: "rgba(0, 0, 0, 0.08)",
	whiteSectionText: "#0E1012",
	whiteSectionTextMuted: "#5F6672",
	borderDark: "rgba(255, 255, 255, 0.08)",
	borderDarkHover: "rgba(232, 234, 237, 0.25)",
	borderSilverSubtle: "rgba(192, 197, 204, 0.18)",
	success: "#10B981",
	warning: "#F59E0B",
	error: "#EF4444"
}, o = {
	silverMetallic: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)",
	silverMetallicHover: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 50%, #D4D8DE 100%)",
	silverMetallicActive: "linear-gradient(180deg, #E8EAED 0%, #D4D8DE 50%, #C0C5CC 100%)",
	surfaceGradient: "linear-gradient(180deg, #24272B 0%, #1D1F23 100%)",
	surfaceHoverGradient: "linear-gradient(180deg, #2B2F34 0%, #22252A 100%)",
	silverBorderGradient: "linear-gradient(135deg, rgba(232, 234, 237, 0.35) 0%, rgba(192, 197, 204, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%)",
	silverTextGradient: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 60%, #C0C5CC 100%)"
}, s = {
	fontFamilies: {
		sans: "Inter, Manrope, system-ui, -apple-system, sans-serif",
		heading: "Manrope, Inter, sans-serif"
	},
	weights: {
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800
	},
	letterSpacing: {
		tighter: "-0.03em",
		tight: "-0.015em",
		normal: "0em",
		wide: "0.025em",
		eyebrow: "0.18em"
	}
}, c = {
	soft: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
	metallicGlow: "0 0 25px rgba(232, 234, 237, 0.18)",
	cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
	buttonGlow: "0 2px 14px rgba(232, 234, 237, 0.28)",
	whiteCardShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.03)"
}, l = {
	sm: "6px",
	md: "10px",
	lg: "14px",
	xl: "18px",
	"2xl": "24px",
	pill: "9999px"
}, u = {
	colors: a,
	gradients: o,
	typography: s,
	shadows: c,
	radii: l
}, d = e.forwardRef(({ variant: e = "primary", size: i = "md", shape: a = "pill", showArrow: o = !1, icon: s, trailingIcon: c, leadingIcon: l, iconPosition: u = "right", iconStyle: d = "circle", children: f, className: p = "", ...m }, h) => {
	let g = a === "pill" ? "rounded-full" : "rounded-xl", _ = {
		sm: "text-xs px-4 py-2.5 min-h-[38px] gap-2",
		md: "text-sm px-6 py-3.5 min-h-[48px] gap-2.5",
		lg: "text-base px-8 py-4.5 min-h-[58px] gap-3"
	}[i], v = {
		primary: "dls-btn-silver text-[#111315] hover:shadow-[0_4px_20px_rgba(232,234,237,0.35)] active:scale-[0.98]",
		secondary: "dls-btn-secondary text-[#D4D8DE] hover:text-white hover:border-[#E8EAED]/50 active:scale-[0.98]",
		inverted: "bg-[#111315] text-white border border-[#24272B] hover:bg-[#24272B] hover:border-[#E8EAED]/30 hover:shadow-lg active:scale-[0.98]",
		ghost: "bg-transparent text-[#D4D8DE] hover:text-white hover:bg-white/5 active:scale-[0.98]"
	}[e], y = l || (s && u === "left" ? s : null), b = c || (s && u === "right" ? s : null) || (o ? /* @__PURE__ */ n(t, { className: i === "sm" ? "w-3 h-3 stroke-[2.2]" : i === "lg" ? "w-4 h-4 stroke-[2.2]" : "w-3.5 h-3.5 stroke-[2.2]" }) : null), x = {
		sm: "w-5 h-5 p-1",
		md: "w-6 h-6 p-1.5",
		lg: "w-7 h-7 p-1.5"
	}[i], S = {
		primary: "bg-black/10 group-hover:bg-black/20 text-[#111315]",
		secondary: "bg-white/10 group-hover:bg-white/20 text-white",
		inverted: "bg-white/15 group-hover:bg-white/25 text-white",
		ghost: "bg-white/5 group-hover:bg-white/15 text-current"
	}[e];
	return /* @__PURE__ */ r("button", {
		ref: h,
		className: `group inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8EAED] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer tracking-tight ${g} ${_} ${v} ${p}`,
		...m,
		children: [
			y && /* @__PURE__ */ n("span", {
				className: "inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5",
				children: y
			}),
			/* @__PURE__ */ n("span", {
				className: "inline-flex items-center leading-none",
				children: f
			}),
			b && /* @__PURE__ */ n("span", {
				className: `inline-flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1 ${d === "circle" ? `rounded-full ${x} ${S} shadow-sm` : ""}`,
				children: b
			})
		]
	});
});
d.displayName = "DevHorizonButton";
var f = d, p = d, m = ({ variant: e = "silver", size: t = "md", showDot: i = !1, children: a, className: o = "", ...s }) => {
	let c = `inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] rounded-full select-none ${t === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs"}`, l = {
		silver: "bg-[#24272B]/70 text-[#D4D8DE] border border-[#E8EAED]/20 shadow-[0_0_12px_rgba(232,234,237,0.08)]",
		dark: "bg-[#111315] text-[#8E95A0] border border-white/10",
		light: "bg-[#F3F4F6] text-[#4B5563] border border-black/8",
		outline: "bg-transparent text-[#C0C5CC] border border-[#C0C5CC]/30",
		success: "bg-emerald-950/40 text-emerald-300 border border-emerald-500/30",
		warning: "bg-amber-950/40 text-amber-300 border border-amber-500/30",
		info: "bg-sky-950/40 text-sky-300 border border-sky-500/30"
	}[e], u = {
		silver: "bg-[#E8EAED]",
		dark: "bg-[#8E95A0]",
		light: "bg-[#4B5563]",
		outline: "bg-[#C0C5CC]",
		success: "bg-emerald-400",
		warning: "bg-amber-400",
		info: "bg-sky-400"
	}[e];
	return /* @__PURE__ */ r("span", {
		className: `${c} ${l} ${o}`,
		...s,
		children: [i && /* @__PURE__ */ r("span", {
			className: "relative flex h-1.5 w-1.5",
			children: [/* @__PURE__ */ n("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full ${u} opacity-75` }), /* @__PURE__ */ n("span", { className: `relative inline-flex rounded-full h-1.5 w-1.5 ${u}` })]
		}), /* @__PURE__ */ n("span", { children: a })]
	});
}, h = m, g = m, _ = ({ children: e, className: t = "", hoverEffect: r = !0, ...i }) => /* @__PURE__ */ n("div", {
	className: `relative bg-[#24272B] rounded-2xl border border-white/8 p-8 sm:p-10 transition-all duration-300 ${r ? "hover:border-[#E8EAED]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(232,234,237,0.06)]" : ""} ${t}`,
	...i,
	children: e
}), v = ({ icon: e, title: i, description: a, linkText: o = "Learn More", badge: s, onLinkClick: c, className: l = "" }) => /* @__PURE__ */ r("div", {
	className: `group relative bg-white rounded-3xl border border-black/8 p-8 sm:p-9 lg:p-10 transition-all duration-300 hover:border-black/15 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-10px_rgba(0,0,0,0.09)] flex flex-col justify-between text-left ${l}`,
	children: [/* @__PURE__ */ r("div", { children: [
		/* @__PURE__ */ r("div", {
			className: "flex items-center justify-between mb-6",
			children: [/* @__PURE__ */ n("div", {
				className: "w-14 h-14 rounded-2xl bg-[#F4F5F7] border border-black/5 flex items-center justify-center text-[#111315] transition-colors duration-300 group-hover:bg-[#111315] group-hover:text-white shrink-0",
				children: e
			}), s && /* @__PURE__ */ n("span", {
				className: "text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 text-[#5F6672]",
				children: s
			})]
		}),
		/* @__PURE__ */ n("h3", {
			className: "text-xl font-bold text-[#111315] tracking-tight mb-3 font-sans",
			children: i
		}),
		/* @__PURE__ */ n("p", {
			className: "text-sm text-[#5F6672] leading-relaxed mb-8 font-sans",
			children: a
		})
	] }), /* @__PURE__ */ r("div", {
		onClick: c,
		className: "inline-flex items-center gap-2 text-xs font-bold text-[#111315] group-hover:text-black cursor-pointer pt-4 border-t border-black/5 transition-colors",
		children: [/* @__PURE__ */ n("span", { children: o }), /* @__PURE__ */ n(t, { className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" })]
	})]
}), y = ({ title: e, category: i, description: a, image: o, tags: s = [], linkText: c = "View Case Study", onLinkClick: l, className: u = "" }) => /* @__PURE__ */ r("div", {
	className: `group relative bg-[#24272B] rounded-2xl border border-white/8 overflow-hidden transition-all duration-300 hover:border-[#E8EAED]/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),0_0_24px_rgba(232,234,237,0.08)] flex flex-col justify-between ${u}`,
	children: [o && /* @__PURE__ */ r("div", {
		className: "relative h-48 w-full overflow-hidden bg-[#1A1C1F]",
		children: [
			/* @__PURE__ */ n("img", {
				src: o,
				alt: e,
				className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
				loading: "lazy"
			}),
			/* @__PURE__ */ n("div", { className: "absolute inset-0 bg-gradient-to-t from-[#24272B] via-transparent to-transparent opacity-80" }),
			i && /* @__PURE__ */ n("span", {
				className: "absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#111315]/80 backdrop-blur-md text-[#E8EAED] border border-white/10",
				children: i
			})
		]
	}), /* @__PURE__ */ r("div", {
		className: "p-8 sm:p-9 flex-1 flex flex-col justify-between",
		children: [/* @__PURE__ */ r("div", { children: [
			!o && i && /* @__PURE__ */ n("span", {
				className: "inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#C0C5CC] border border-white/5 mb-3",
				children: i
			}),
			/* @__PURE__ */ n("h3", {
				className: "text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#E8EAED] transition-colors font-sans",
				children: e
			}),
			/* @__PURE__ */ n("p", {
				className: "text-xs text-[#8E95A0] leading-relaxed mb-4",
				children: a
			}),
			s.length > 0 && /* @__PURE__ */ n("div", {
				className: "flex flex-wrap gap-1.5 mb-6",
				children: s.map((e, t) => /* @__PURE__ */ n("span", {
					className: "text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8E95A0] border border-white/5",
					children: e
				}, t))
			})
		] }), /* @__PURE__ */ r("div", {
			onClick: l,
			className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8EAED] group-hover:text-white cursor-pointer pt-3 border-t border-white/8 transition-colors",
			children: [/* @__PURE__ */ n("span", { children: c }), /* @__PURE__ */ n(t, { className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" })]
		})]
	})]
}), b = _, x = _, S = v, C = v, w = y, T = y, E = ({ variant: e = "horizontal", size: t = "md", showTagline: a = !0, className: o = "", asLink: s = !0, to: c = "/" }) => {
	let l = {
		sm: "h-8",
		md: "h-10",
		lg: "h-14",
		xl: "h-20"
	}[t], u = /* @__PURE__ */ r("div", {
		className: `inline-flex items-center gap-3 select-none group ${o}`,
		children: [/* @__PURE__ */ n("div", {
			className: "relative flex items-center justify-center shrink-0",
			children: /* @__PURE__ */ n("img", {
				src: "/assets/devhorizon-logo-metallic.png",
				alt: "DevHorizon Logo",
				className: `${l} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(232,234,237,0.2)]`,
				loading: "eager"
			})
		}), e === "horizontal" && /* @__PURE__ */ r("div", {
			className: "flex flex-col justify-center leading-none",
			children: [/* @__PURE__ */ n("span", {
				className: "font-extrabold tracking-tight text-white font-sans text-base lg:text-lg group-hover:text-[#E8EAED] transition-colors",
				children: "DEVHORIZON"
			}), a && /* @__PURE__ */ n("span", {
				className: "text-[9px] font-semibold tracking-[0.2em] text-[#C0C5CC] uppercase mt-0.5",
				children: "BUILD BEYOND TODAY"
			})]
		})]
	});
	return s ? /* @__PURE__ */ n(i, {
		to: c,
		className: "inline-flex items-center focus:outline-none",
		"aria-label": "DevHorizon Home",
		children: u
	}) : u;
}, D = E, O = E, k = ({ value: e, label: t, subtext: i, trend: a, trendType: o = "positive", metallic: s = !1, className: c = "" }) => {
	let l = {
		positive: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
		neutral: "text-[#C0C5CC] bg-[#1E2124] border-white/10",
		negative: "text-rose-400 bg-rose-950/40 border-rose-500/20"
	}[o];
	return /* @__PURE__ */ r("div", {
		className: `flex flex-col text-left ${c}`,
		children: [
			/* @__PURE__ */ r("div", {
				className: "flex items-baseline gap-3 mb-1",
				children: [/* @__PURE__ */ n("div", {
					className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans ${s ? "dls-text-metallic" : "text-white"}`,
					children: e
				}), a && /* @__PURE__ */ n("span", {
					className: `text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border ${l}`,
					children: a
				})]
			}),
			/* @__PURE__ */ n("div", {
				className: "text-sm font-semibold text-[#D4D8DE] tracking-tight",
				children: t
			}),
			i && /* @__PURE__ */ n("div", {
				className: "text-xs text-[#8E95A0] mt-0.5 font-normal leading-relaxed",
				children: i
			})
		]
	});
}, A = k, j = k, M = [
	{
		number: "01",
		title: "Discover",
		description: "Understand your goals, market requirements, and technical landscape.",
		duration: "Week 1",
		status: "completed"
	},
	{
		number: "02",
		title: "Design",
		description: "Create scalable, user-centric wireframes and architectural roadmaps.",
		duration: "Week 2-3",
		status: "active"
	},
	{
		number: "03",
		title: "Develop",
		description: "Build with precision engineering, clean code, and security best practices.",
		duration: "Week 4-7",
		status: "upcoming"
	},
	{
		number: "04",
		title: "Deliver",
		description: "Launch with zero downtime, robust observability, and continuous growth support.",
		duration: "Week 8+",
		status: "upcoming"
	}
], N = ({ steps: e = M, layout: t = "grid", className: i = "" }) => {
	let a = (e) => ({
		completed: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
		active: "text-[#E8EAED] bg-[#24272B] border-white/20 animate-pulse",
		upcoming: "text-[#8E95A0] bg-transparent border-white/5"
	})[e || "upcoming"], o = (e) => ({
		completed: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
		active: "bg-[#E8EAED] animate-ping",
		upcoming: "bg-[#8E95A0]/40"
	})[e || "upcoming"];
	return t === "connected" ? /* @__PURE__ */ n("div", {
		className: `w-full py-4 ${i}`,
		children: /* @__PURE__ */ r("div", {
			className: "relative flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4",
			children: [/* @__PURE__ */ n("div", { className: "hidden md:block absolute top-7 left-12 right-12 h-[2px] bg-white/10 z-0" }), e.map((e, t) => {
				let i = e.status === "completed", o = e.status === "active";
				return /* @__PURE__ */ r("div", {
					className: "relative z-10 flex-1 flex flex-col items-start md:items-center text-left md:text-center group",
					children: [
						/* @__PURE__ */ n("div", {
							className: `w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm mb-4 transition-all duration-300 border ${i ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" : o ? "bg-[#24272B] border-[#E8EAED] text-white shadow-[0_0_20px_rgba(232,234,237,0.25)] scale-105" : "bg-[#1A1C1F] border-white/10 text-[#8E95A0]"}`,
							children: e.number
						}),
						/* @__PURE__ */ r("div", {
							className: "flex items-center gap-2 mb-1.5",
							children: [/* @__PURE__ */ n("h4", {
								className: "text-sm font-bold text-white tracking-tight font-sans",
								children: e.title
							}), e.duration && /* @__PURE__ */ n("span", {
								className: `text-[10px] font-mono px-2 py-0.2 rounded-full border ${a(e.status)}`,
								children: e.duration
							})]
						}),
						/* @__PURE__ */ n("p", {
							className: "text-xs text-[#8E95A0] leading-relaxed max-w-[220px]",
							children: e.description
						})
					]
				}, e.number);
			})]
		})
	}) : t === "vertical" ? /* @__PURE__ */ n("div", {
		className: `w-full relative pl-6 border-l-2 border-white/10 space-y-8 ${i}`,
		children: e.map((e) => /* @__PURE__ */ r("div", {
			className: "relative group",
			children: [/* @__PURE__ */ n("div", {
				className: "absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#111315] border-2 border-[#E8EAED] flex items-center justify-center",
				children: /* @__PURE__ */ n("div", { className: `w-1.5 h-1.5 rounded-full ${o(e.status)}` })
			}), /* @__PURE__ */ r("div", {
				className: "bg-[#1A1C1F] rounded-xl border border-white/8 p-5 transition-all duration-300 hover:border-white/20",
				children: [/* @__PURE__ */ r("div", {
					className: "flex items-center justify-between mb-2",
					children: [/* @__PURE__ */ r("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ r("span", {
							className: "text-xs font-mono font-bold text-[#E8EAED]",
							children: ["Phase ", e.number]
						}), /* @__PURE__ */ n("h4", {
							className: "text-sm font-bold text-white font-sans",
							children: e.title
						})]
					}), e.duration && /* @__PURE__ */ n("span", {
						className: `text-[10px] font-mono px-2 py-0.5 rounded-full border ${a(e.status)}`,
						children: e.duration
					})]
				}), /* @__PURE__ */ n("p", {
					className: "text-xs text-[#8E95A0] leading-relaxed",
					children: e.description
				})]
			})]
		}, e.number))
	}) : /* @__PURE__ */ n("div", {
		className: `w-full ${i}`,
		children: /* @__PURE__ */ n("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative",
			children: e.map((e) => /* @__PURE__ */ r("div", {
				className: "group relative bg-[#1E2124] rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:border-[#E8EAED]/30 hover:-translate-y-1 flex flex-col justify-between",
				children: [/* @__PURE__ */ r("div", { children: [
					/* @__PURE__ */ r("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ n("span", {
							className: "text-xs font-mono font-bold tracking-widest text-[#C0C5CC] px-2.5 py-1 rounded bg-[#2A2E33] border border-white/5",
							children: e.number
						}), e.duration && /* @__PURE__ */ n("span", {
							className: `text-[10px] font-mono px-2 py-0.5 rounded-full border ${a(e.status)}`,
							children: e.duration
						})]
					}),
					/* @__PURE__ */ n("h4", {
						className: "text-base font-bold text-white mb-2 font-sans tracking-tight",
						children: e.title
					}),
					/* @__PURE__ */ n("p", {
						className: "text-xs text-[#8E95A0] leading-relaxed",
						children: e.description
					})
				] }), /* @__PURE__ */ r("div", {
					className: "pt-4 mt-4 border-t border-white/5 flex items-center justify-between",
					children: [/* @__PURE__ */ r("span", {
						className: "text-[10px] font-semibold text-[#8E95A0] uppercase tracking-wider",
						children: ["Phase ", e.number]
					}), /* @__PURE__ */ n("div", { className: "w-1.5 h-1.5 rounded-full bg-[#E8EAED]/40 group-hover:bg-[#E8EAED] transition-colors" })]
				})]
			}, e.number))
		})
	});
}, P = N, F = N;
export { _ as DarkSurfaceCard, m as DevHorizonBadge, d as DevHorizonButton, b as DevHorizonCard, D as DevHorizonLogo, N as DevHorizonProcessTimeline, y as DevHorizonProjectCard, S as DevHorizonServiceCard, k as DevHorizonStatItem, h as DevHorizonTechBadge, f as DevHorizonTechButton, x as DevHorizonTechCard, O as DevHorizonTechLogo, P as DevHorizonTechProcessTimeline, T as DevHorizonTechProjectCard, C as DevHorizonTechServiceCard, A as DevHorizonTechStatItem, g as DlsBadge, p as DlsButton, E as DlsLogo, F as ProcessTimeline, w as ProjectCard, j as StatItem, v as WhiteServiceCard, a as colors, u as dlsTokens, o as gradients, l as radii, c as shadows, s as typography };
