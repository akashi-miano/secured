/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0fbbe0",
        secondary: "#0d2154",
      },
      backgroundImage: {
        cyber: "url('./assets/cyber-bg.png')",
        cloud: "url('./assets/cloud-bg.png')",
        footer: "url('./assets/footer-bg.jpg')",
        recovery: "url('./assets/recovery-bg.png')",
        contact: "url('./assets/contact-bg.png')",
      },
    },
  },
  plugins: [],
};
