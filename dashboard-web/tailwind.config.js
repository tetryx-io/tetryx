/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "-3xl": "0 -0.25rem 2rem rgba(50, 50, 50, 1)",
      },
      colors: {
        primary: {
          500: "#FF6363;",
          800: "#FF1313;",
        },
        atrium: {
          black: "#0A0A0A",
          purple: "#7542ED",
          offWhite: "#ECECEC",
          yellow: "#F2BB05",
          cream: "#FFF1C1",
          green: "#22C74E",
          orange: "#DA761F",
          blue: "#0D4EE8",
          navy: "#002375",
        },
        offWhite: "#ECECEC",
        black: "#0A0A0A",
      },
      backgroundImage: {
        'light-pattern': "url('/public/images/footer-pattern.png')",
      },
      fontFamily: {
        mono: ["var(--font-inter)"],
        inter: ["var(--font-inter)"],
        epilogue: ["var(--font-epilogue)"],
        sora: ["var(--font-sora)"],
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
      },
      fontSize: {
        xxs: "0.5rem",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        "ultra-wide": "2080px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
