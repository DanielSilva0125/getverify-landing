import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [heroui()],
};

export default config;
