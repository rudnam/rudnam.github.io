import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", "Noto Serif JP", ...defaultTheme.fontFamily.serif],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            p: {
              "@apply text-body": {},
            },
            h1: { "@apply text-heading": {} },
            h2: { "@apply text-heading": {} },
            h3: { "@apply text-heading": {} },
            h4: { "@apply text-heading": {} },
            h5: { "@apply text-heading": {} },
            h6: { "@apply text-heading": {} },
          },
        },
        dark: {
          css: {
            p: {
              "@apply text-body": {},
            },
            h1: { "@apply text-heading": {} },
            h2: { "@apply text-heading": {} },
            h3: { "@apply text-heading": {} },
            h4: { "@apply text-heading": {} },
            h5: { "@apply text-heading": {} },
            h6: { "@apply text-heading": {} },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
