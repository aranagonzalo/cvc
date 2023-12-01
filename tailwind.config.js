/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                landing:
                    "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%);",
            },
        },
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
            "custom-green": {
                DEFAULT: "#51c14b",
            },
            "custom-red": {
                DEFAULT: "#ff6f52",
            },
            "custom-sky": {
                DEFAULT: "#2cabca",
            },
        },
    },
    plugins: [],
};
