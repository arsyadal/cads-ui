import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0A",
        bone: "#F5F0E8",
        copper: "#C86F37",
        acid: "#D7FF5C",
        graphite: "#171716",
      },
      boxShadow: {
        glow: "0 0 80px rgba(216, 255, 92, 0.18)",
        copper: "0 22px 80px rgba(200, 111, 55, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
