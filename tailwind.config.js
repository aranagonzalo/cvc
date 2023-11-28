/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            "custom-grey": {
                DEFAULT: "#1c1c1c",
                300: "#777",
            },
            "custom-cream": {
                DEFAULT: "#fefdf4",
            },
            "custom-blue": {
                DEFAULT: "#2a37a3",
            },
        },
    },
    plugins: [],
};
