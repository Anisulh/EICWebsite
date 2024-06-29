/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#008080', // Teal
                secondary: '#FFD700', // Gold
            },
        },
    },
    plugins: [],
};
