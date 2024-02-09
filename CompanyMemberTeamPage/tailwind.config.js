/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Users/constprasenjit/Desktop/Github/VeriTech/CompanyMemberTeamPage/src/assets/2.jpeg')"
      },
    },
  },
  plugins: [require("daisyui")]
}

