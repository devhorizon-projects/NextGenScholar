/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../DLS/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ngs: {
          black: "#111214",
          graphite: "#34363A",
          silver: "#C7C9CC",
          lightSilver: "#F3F4F5",
          white: "#FFFFFF",
          gold: "#C5A253",
          goldDark: "#8D6A2C",
          goldLight: "#E6CA83",
        },
        dls: {
          bg: "#111315",
          card: "#24272B",
          cardHover: "#2B2F35",
          elevated: "#1A1C1F",
          silver: "#E8EAED",
          platinum: "#C0C5CC",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "gold-metallic": "linear-gradient(100deg, #8D6A2C 0%, #E6CA83 50%, #B18A43 100%)",
        "gold-metallic-hover": "linear-gradient(100deg, #9C7837 0%, #F0D799 50%, #BD964F 100%)",
        "silver-metallic": "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(197, 162, 83, 0.08) 0%, rgba(17, 18, 20, 0) 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(197, 162, 83, 0.25)",
        "gold-button": "0 4px 20px rgba(197, 162, 83, 0.35)",
        "silver-glow": "0 0 25px rgba(232, 234, 237, 0.18)",
      },
    },
  },
  plugins: [],
};
