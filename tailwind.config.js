/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
  });
});

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [rotateY];
