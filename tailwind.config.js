import defaultTheme from "tailwindcss/defaultTheme";
// import forms from "@tailwindcss/forms";
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./node_modules/preline/preline.js",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("preline/plugin"), heroui()],
};
