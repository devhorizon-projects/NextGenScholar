import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@devhorizon/dls/style.css": path.resolve(__dirname, "./vendor/dls/dist/style.css"),
      "@devhorizon/dls": path.resolve(__dirname, "./vendor/dls/dist/index.js"),
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "react/jsx-runtime": path.resolve(__dirname, "./node_modules/react/jsx-runtime"),
    },
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  server: {
    port: 5173,
    host: true,
  },
});
