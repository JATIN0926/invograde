const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "Righteous-Regular": ["Righteous Regular", "sans-serif"],
        "Quicksand-Light": ["Quicksand Light", "sans-serif"],
        "Snippet-Regular": ["Snippet Regular", "sans-serif"],
        "IBMPlexSans-Bold": ["IBMPlexSans Bold", "sans-serif"],
        "IBMPlexSans-Regular": ["IBMPlexSans Regular", "sans-serif"],
        "IBMPlexSans-Light": ["IBMPlexSans Light", "sans-serif"],
        "IBMPlexSans-Medium": ["IBMPlexSans Medium", "sans-serif"],
        "IBMPlexSans-SemiBold": ["IBMPlexSans SemiBold", "sans-serif"],
        "ReemKufiFun-Medium": ["ReemKufiFun Medium", "sans-serif"],
        "ReemKufiFun-Regular": ["ReemKufiFun Regular", "sans-serif"],
        "ReemKufiFun-SemiBold": ["ReemKufiFun SemiBold", "sans-serif"],
        "PublicSans-Bold": ["PublicSans Bold", "sans-serif"],
        "PublicSans-Light": ["PublicSans Light", "sans-serif"],
        "PublicSans-Medium": ["PublicSans Medium", "sans-serif"],
        "PublicSans-Regular": ["PublicSans Regular", "sans-serif"],
        "PublicSans-SemiBold": ["PublicSans SemiBold", "sans-serif"],
        "PublicSans-Thin": ["PublicSans Thin", "sans-serif"],
        "Outfit-Medium": ["Outfit Medium", "sans-serif"],
        "Outfit-Regular": ["Outfit Regular", "sans-serif"],
        "Outfit-SemiBold": ["Outfit SemiBold", "sans-serif"],
        "Geist-Light": ["Geist Light", "sans-serif"],
        "Geist-Regular": ["Geist Regular", "sans-serif"],
        "Geist-Medium": ["Geist Medium", "sans-serif"],
        "Geist-SemiBold": ["Geist SemiBold", "sans-serif"],
      },
      backgroundImage: {
        "login-bg": "url('/images/login_bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      screens: {
        mbMini: "290px",
        mbXSmall: "400px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        carousel: "932px",
        tbPortrait: "1200px",
        tbMedium: "1400px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, flowbite.plugin()],
};
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
