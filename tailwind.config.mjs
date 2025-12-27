/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                night: "#070A12",
                "glass-edge": "rgba(255,255,255,0.08)",
                "text-primary": "#EAF0FF",
                "text-muted": "rgba(234,240,255,0.70)",
                "holo-a": "#7C5CFF",
                "holo-b": "#00E5FF",
                signal: "#FF4D8D",
            },
            fontFamily: {
                sans: ["Inter Variable", "sans-serif"],
                display: ["Sora", "sans-serif"],
            },
            animation: {
                "blob-spin": "blob-spin 20s infinite linear",
            },
            keyframes: {
                "blob-spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
        },
    },
    plugins: [],
};
