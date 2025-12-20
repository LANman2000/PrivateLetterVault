/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
    theme: {
    extend: {
        keyframes: {
        'confetti-burst': {
            '0%':   { opacity: 0, transform: 'scale(0.5) translateY(0)' },
            '10%':  { opacity: 1, transform: 'scale(1.3) translateY(-20px)' },
            '40%':  { opacity: 1, transform: 'scale(1) translateY(0)' },
            '100%': { opacity: 0, transform: 'scale(0.5) translateY(40px)' },
        },
        },
        animation: {
        'confetti-burst': 'confetti-burst 3s ease-out forwards',
        },
    },
    },
  plugins: [],
};
