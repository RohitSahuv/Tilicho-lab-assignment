import { nextui } from "@nextui-org/react";

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: "class",
    plugins: [nextui(), require('tailwindcss'), require('autoprefixer')]
}
