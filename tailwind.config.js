/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Righteous-Regular": ["Righteous Regular", "sans-serif"],
        "Quicksand-Light": ["Quicksand Light", "sans-serif"],
      },
      backgroundImage: {
        "login-bg": "url('/images/login_bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        "homePage-bg": "url('/images/homePage_bg.png')",
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
    },
  },
  plugins: [],
};
