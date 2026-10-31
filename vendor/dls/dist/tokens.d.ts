/**
 * DevHorizon Design Language System (DLS) - Tokens
 * Core design tokens derived from brand guidelines & luxury tech aesthetic.
 */
export declare const colors: {
    readonly primaryBackground: "#111315";
    readonly surfaceCard: "#24272B";
    readonly surfaceCardHover: "#2A2E33";
    readonly surfaceElevated: "#1A1C1F";
    readonly textLight: "#D4D8DE";
    readonly textMuted: "#8E95A0";
    readonly textSubtle: "#626873";
    readonly shiningSilver: "#E8EAED";
    readonly secondaryPlatinum: "#C0C5CC";
    readonly brightWhite: "#FFFFFF";
    readonly whiteSectionBg: "#FFFFFF";
    readonly whiteSectionSurface: "#F8F9FA";
    readonly whiteSectionBorder: "rgba(0, 0, 0, 0.08)";
    readonly whiteSectionText: "#0E1012";
    readonly whiteSectionTextMuted: "#5F6672";
    readonly borderDark: "rgba(255, 255, 255, 0.08)";
    readonly borderDarkHover: "rgba(232, 234, 237, 0.25)";
    readonly borderSilverSubtle: "rgba(192, 197, 204, 0.18)";
    readonly success: "#10B981";
    readonly warning: "#F59E0B";
    readonly error: "#EF4444";
};
export declare const gradients: {
    readonly silverMetallic: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)";
    readonly silverMetallicHover: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 50%, #D4D8DE 100%)";
    readonly silverMetallicActive: "linear-gradient(180deg, #E8EAED 0%, #D4D8DE 50%, #C0C5CC 100%)";
    readonly surfaceGradient: "linear-gradient(180deg, #24272B 0%, #1D1F23 100%)";
    readonly surfaceHoverGradient: "linear-gradient(180deg, #2B2F34 0%, #22252A 100%)";
    readonly silverBorderGradient: "linear-gradient(135deg, rgba(232, 234, 237, 0.35) 0%, rgba(192, 197, 204, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%)";
    readonly silverTextGradient: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 60%, #C0C5CC 100%)";
};
export declare const typography: {
    readonly fontFamilies: {
        readonly sans: "Inter, Manrope, system-ui, -apple-system, sans-serif";
        readonly heading: "Manrope, Inter, sans-serif";
    };
    readonly weights: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
        readonly extrabold: 800;
    };
    readonly letterSpacing: {
        readonly tighter: "-0.03em";
        readonly tight: "-0.015em";
        readonly normal: "0em";
        readonly wide: "0.025em";
        readonly eyebrow: "0.18em";
    };
};
export declare const shadows: {
    readonly soft: "0 4px 20px -2px rgba(0, 0, 0, 0.5)";
    readonly metallicGlow: "0 0 25px rgba(232, 234, 237, 0.18)";
    readonly cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)";
    readonly buttonGlow: "0 2px 14px rgba(232, 234, 237, 0.28)";
    readonly whiteCardShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.03)";
};
export declare const radii: {
    readonly sm: "6px";
    readonly md: "10px";
    readonly lg: "14px";
    readonly xl: "18px";
    readonly "2xl": "24px";
    readonly pill: "9999px";
};
export declare const dlsTokens: {
    colors: {
        readonly primaryBackground: "#111315";
        readonly surfaceCard: "#24272B";
        readonly surfaceCardHover: "#2A2E33";
        readonly surfaceElevated: "#1A1C1F";
        readonly textLight: "#D4D8DE";
        readonly textMuted: "#8E95A0";
        readonly textSubtle: "#626873";
        readonly shiningSilver: "#E8EAED";
        readonly secondaryPlatinum: "#C0C5CC";
        readonly brightWhite: "#FFFFFF";
        readonly whiteSectionBg: "#FFFFFF";
        readonly whiteSectionSurface: "#F8F9FA";
        readonly whiteSectionBorder: "rgba(0, 0, 0, 0.08)";
        readonly whiteSectionText: "#0E1012";
        readonly whiteSectionTextMuted: "#5F6672";
        readonly borderDark: "rgba(255, 255, 255, 0.08)";
        readonly borderDarkHover: "rgba(232, 234, 237, 0.25)";
        readonly borderSilverSubtle: "rgba(192, 197, 204, 0.18)";
        readonly success: "#10B981";
        readonly warning: "#F59E0B";
        readonly error: "#EF4444";
    };
    gradients: {
        readonly silverMetallic: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)";
        readonly silverMetallicHover: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 50%, #D4D8DE 100%)";
        readonly silverMetallicActive: "linear-gradient(180deg, #E8EAED 0%, #D4D8DE 50%, #C0C5CC 100%)";
        readonly surfaceGradient: "linear-gradient(180deg, #24272B 0%, #1D1F23 100%)";
        readonly surfaceHoverGradient: "linear-gradient(180deg, #2B2F34 0%, #22252A 100%)";
        readonly silverBorderGradient: "linear-gradient(135deg, rgba(232, 234, 237, 0.35) 0%, rgba(192, 197, 204, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%)";
        readonly silverTextGradient: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 60%, #C0C5CC 100%)";
    };
    typography: {
        readonly fontFamilies: {
            readonly sans: "Inter, Manrope, system-ui, -apple-system, sans-serif";
            readonly heading: "Manrope, Inter, sans-serif";
        };
        readonly weights: {
            readonly regular: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
            readonly extrabold: 800;
        };
        readonly letterSpacing: {
            readonly tighter: "-0.03em";
            readonly tight: "-0.015em";
            readonly normal: "0em";
            readonly wide: "0.025em";
            readonly eyebrow: "0.18em";
        };
    };
    shadows: {
        readonly soft: "0 4px 20px -2px rgba(0, 0, 0, 0.5)";
        readonly metallicGlow: "0 0 25px rgba(232, 234, 237, 0.18)";
        readonly cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)";
        readonly buttonGlow: "0 2px 14px rgba(232, 234, 237, 0.28)";
        readonly whiteCardShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.03)";
    };
    radii: {
        readonly sm: "6px";
        readonly md: "10px";
        readonly lg: "14px";
        readonly xl: "18px";
        readonly "2xl": "24px";
        readonly pill: "9999px";
    };
};
export default dlsTokens;
