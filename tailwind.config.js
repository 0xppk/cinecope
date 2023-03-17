/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `app/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    `hyezo/**/*.{js,ts,jsx,tsx}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rot: {
          from: { transform: "rotate(0deg)" },
          "50%": { transform: "scale(1.2, 1.3)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rot: "rot 20s infinite",
      },
      colors: {
        orange: {
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffc966",
          400: "#ffb733",
          500: "#ffa500",
          600: "#cc8400",
          700: "#996300",
          800: "#664200",
          900: "#332100",
        },
        twitter: {
          100: "#d2ecfc",
          200: "#a5d9f9",
          300: "#78c7f7",
          400: "#4bb4f4",
          500: "#1ea1f1",
          600: "#1881c1",
          700: "#126191",
          800: "#0c4060",
          900: "#062030",
        },
        paleBlue: {
          100: "#e0ebf5",
          200: "#c2d6eb",
          300: "#a3c2e0",
          400: "#85add6",
          500: "#6699cc",
          600: "#527aa3",
          700: "#3d5c7a",
          800: "#293d52",
          900: "#141f29",
        },
        salary: {
          100: "#f4feeb",
          200: "#eafed8",
          300: "#dffdc4",
          400: "#d5fdb1",
          500: "#cafc9d",
          600: "#a2ca7e",
          700: "#79975e",
          800: "#51653f",
          900: "#28321f",
        },
        smoke: {
          100: "#fbfcfd",
          200: "#f8fafb",
          300: "#f4f7fa",
          400: "#f1f5f8",
          500: "#edf2f6",
          600: "#bec2c5",
          700: "#8e9194",
          800: "#5f6162",
          900: "#2f3031",
        },
        brand: "var(--brand)",
        point: "var(--point)",
      },
      cursor: {
        fancy: "url('/apps/docs/src/assets/cursor.png'), default",
        fancyHover: "url('/apps/docs/src/assets/cursor_hover.png'), pointer",
      },
      scrollPadding: {
        vmax: "14vmax",
      },
      objectPosition: {
        "center-center": "center center",
      },
      gridTemplateRows: {
        masonry: "masonry",
      },
    },
    // overrides
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontSize: {
      xs: "clamp(0.78rem, calc(0.68rem + 0.40vw), 1.04rem)",
      sm: "clamp(0.88rem, calc(0.74rem + 0.56vw), 1.25rem)",
      md: "clamp(0.98rem, calc(0.80rem + 0.77vw), 1.50rem)",
      lg: "clamp(1.11rem, calc(0.86rem + 1.04vw), 1.80rem)",
      xl: "clamp(1.25rem, calc(0.92rem + 1.37vw), 2.16rem)",
      "2xl": "clamp(1.40rem, calc(0.98rem + 1.79vw), 2.59rem)",
      "3xl": "clamp(1.58rem, calc(1.04rem + 2.30vw), 3.11rem)",
    },
  },
  plugins: [
    ({ addUtilities }) => {
      /** @type {import('tailwindcss/types/config').PluginCreator} */
      addUtilities({
        ".keep-all": {
          "word-break": "keep-all",
        },
        ".blue-dot": {
          width: "8px",
          height: "8px",
          margin: "8px",
          border: "2px solid rgb(102, 153, 204)",
          "background-color": "rgb(102, 153, 204)",
          "min-width": "8px",
          "border-radius": "50%",
        },
        ".bg-stripes-gray": {
          "background-color": "#9ca3af1a",
          "background-image":
            "linear-gradient(135deg, #6b728080 10%, transparent 0, transparent 50%, #6b728080 0, #6b728080 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-cyan": {
          "background-color": "#22d3ee1a",
          "background-image":
            "linear-gradient(135deg, #06b6d480 10%, transparent 0, transparent 50%, #06b6d480 0, #06b6d480 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-sky": {
          "background-color": "#38bdf81a",
          "background-image":
            "linear-gradient(135deg, #0ea5e980 10%, transparent 0, transparent 50%, #0ea5e980 0, #0ea5e980 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-blue": {
          "background-color": "#60a5fa1a",
          "background-image":
            "linear-gradient(135deg,#3b82f680 10%,transparent 0,transparent 50%,#3b82f680 0, #3b82f680 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-indigo": {
          "background-color": "#818cf81a",
          "background-image":
            "linear-gradient(135deg, #6366f180 10%, transparent 0, transparent 50%, #6366f180 0, #6366f180 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-violet": {
          "background-color": "#a78bfa1a",
          "background-image":
            "linear-gradient(135deg, #8b5cf680 10%, transparent 0, transparent 50%, #8b5cf680 0, #8b5cf680 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-purple": {
          "background-color": "#c084fc1a",
          "background-image":
            "linear-gradient(135deg, #a855f780 10%, transparent 0, transparent 50%, #a855f780 0, #a855f780 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-fuchsia": {
          "background-color": "#e879f91a",
          "background-image":
            "linear-gradient(135deg, #d946ef80 10%, transparent 0, transparent 50%, #d946ef80 0, #d946ef80 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-pink": {
          "background-color": "#f472b61a",
          "background-image":
            "linear-gradient(135deg, #ec489980 10%, transparent 0, transparent 50%, #ec489980 0, #ec489980 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".bg-stripes-white": {
          "background-image":
            "linear-gradient(135deg, hsla(0, 0%, 100%, 0.75) 10%, transparent 0, transparent 50%,hsla(0, 0%, 100%, 0.75) 0, hsla(0, 0%, 100%, 0.75) 60%, transparent 0, transparent)",
          "background-size": "7.07px 7.07px",
        },
        ".text-shadow": {
          "text-shadow": "1px 1px 2px black",
        },
      });
    },
    ({ addComponents }) => {
      /** @type {import('tailwindcss/types/config').PluginCreator} */
      addComponents({
        ".slider-image": {
          width: "22vmin",
          height: "33vmin",
          objectFit: "cover",
          objectPosition: "center center",
        },
        ".slider": {
          display: "flex",
          width: "max-content",
          gap: "4vmin",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(0%, -50%)",
        },
        ".masonryColumn": {
          display: "flex",
          flex: "1",
          gap: "10px",
          "flex-direction": "column",
        },
        ".masonryImageWrapper": {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "max-content",
          "border-radius": "15px",
        },

        ".overlay": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "#161616",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          opacity: "0",
          transition: "0.5s",
        },

        ".blob": {
          "background-color": "white",
          height: "300px",
          "aspect-ratio": "1",
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          "border-radius": "50%",
          "z-index": "-2",
          background: "linear-gradient(to right, aquamarine, mediumpurple)",
        },

        ".blur": {
          height: "100%",
          width: "100%",
          position: "fixed",
          "z-index": "-1",
          "backdrop-filter": "blur(200px)",
        },

        ".modal": {
          position: "relative",
          "border-radius": "13px",
        },
      });
    },
  ],
};
