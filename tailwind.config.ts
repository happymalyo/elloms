import type { Config } from "tailwindcss";
import { theme } from "./app/styles/theme";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: theme.colors,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      fontSize: theme.fontSize,
      width: theme.width,
      height: theme.height,
      maxWidth: theme.maxWidth,
      boxShadow: theme.boxShadow,
      transitionProperty: theme.transitionProperty,
      transitionDuration: theme.transitionDuration,
      transitionTimingFunction: theme.transitionTimingFunction,
    },
  },
  plugins: [],
} satisfies Config;
