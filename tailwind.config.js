module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primaryColor)', // clear blue
        secondary: 'var(--secondaryColor)', // dark blue
        white: 'var(--whiteColor)', // white
        black: 'var(--blackColor)', // black
        font: 'var(--fontColor)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: true,
  },
};
