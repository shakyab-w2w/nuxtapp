/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [],
  theme: {
    extend: {
        screens: {
            xxs: "320px",
            xs: "375px",
            sm: "425px",
            "3xl": "1920px",
            "4xl": "2560px",
            "5xl": "3024px",
            "6xl": "3456px",
        },
        lineHeight: {
            11: "2.75rem",
            12: "3rem",
        },
        fontFamily: {
            sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            "calibri-bold": ["Calibri-Bold", "sans-serif"],
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        backgroundColor: {
            "primary": "#2C58F1",
            "secondary": "#D31A30",
        },
        textColor: {
            "primary": "#2C58F1",
            heading: "273052",
            "secondary": "#D31A30",
        },
        borderRadius: {
            xl: "1rem",
        },
        borderColor: {
            "primary": "#2C58F1",
            "secondary": "#D31A30",
        },

        animation: {
            blink: "blink 1s infinite",
        },
        keyframes: {
            blink: {
                "0%": {
                    borderColor: "transparent",
                },
                "45%": {
                    borderColor: "transparent",
                },
                "50%": {
                    borderColor: "#9CA3AF",
                },
                "100%": {
                    borderColor: "#9CA3AF",
                },
            },
        },
    },
},
  plugins: [],
}

