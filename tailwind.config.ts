import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      fontSize: {
        "9": "0.563rem",
        "10": "0.625rem",
        "12": "0.75rem",
        "14": "0.875rem",
        "15": "0.938rem",
        "16": "1rem",
        "20": "1.25rem",
        "21": "1.313rem",
        "22": "1.375rem",
        "24": "1.5rem",
        "72": "4.5rem",
      },
      colors: {
        yellow: {
          DEFAULT: "#FBBA00",
          recommended: "#FFFF58",
          light: "#FEC333",
          lightest: "#FEEDC1",
          lighter: "#FFEDC2",
        },
        gray: {
          disabled: "#CACBD1",
          second_border: "#D1D9E2",
          border: "#d1d9de",
          number: "#999CA0",
          lightest: "#8D909C",
          lighter: "#C5C2B0",
          light: "#575b6c",
          hover: "#f5f5f5",
          dark: "#e2e2e2",
          modal: "#a9a9a9",
          selected: "#f5f5f5",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: {
          main: "#1E1E1E",
          secondary: "#494949",
          info: "#171D29",
          light: "#0F0F0F",
          lighter: "#090F1C",
          darkest: "#000",
        },
        white: {
          DEFAULT: "#f9fbfd",
          lightest: "#FFF",
          lighter: "#F8F8F8",
          dark: "#f6f1ff",
        },
        orange: {
          light: "#FFDCCC",
          DEFAULT: "#EC6608",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "card-energy-results":
          "0px 4px 3px 0px rgba(32, 86, 68, 0.08), 0px 2px 16px 0px rgba(32, 86, 68, 0.06)",
        "card-bill-questions":
          "0px 4px 3px 0px rgba(32, 86, 68, 0.08), 0px 2px 16px 0px rgba(32, 86, 68, 0.06)",
        "card-billing-questions":
          "0px 4px 3px 0px rgba(32, 86, 68, 0.08), 0px 2px 16px 0px rgba(32, 86, 68, 0.06)",
        "desktop-effect": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "card-results-list":
          "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px 0px rgba(0, 0, 0, 0.40)",
        "card-more-options": "0px 65px 80px -46px rgba(226, 238, 249, 0.60)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
