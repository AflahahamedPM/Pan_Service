/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|popover).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-bg': '#f0eedc',
        'header-color': '#4f46e5',
        'custom-floral-white': '#FFFAF0', 
        'custom-linen':'#FAF0E6',
        'custom-ivory': '#FFFFF0',
        'custom-snow' : '#FFFAFA',
        'custom-seashell' : '#FFF5EE',
        'custom-jet' : '#343434',
        'custom-gunmetal' : '#2A3439',
        'custom-outerspace' : '#414A4C',
        'custom-snow-contrast' : '#222222'
      },
    },
  },
  plugins: [],
};
