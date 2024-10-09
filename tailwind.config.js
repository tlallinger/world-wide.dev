/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        primary: ['"JetBrains Mono"', 'monospace'], // Add JetBrains Mono here
      },
      colors: {
        primary: {
          DEFAULT: colors.gray[100],
          dark: colors.gray[800],
        },
        secondary: {
          DEFAULT: colors.gray[300],
          dark: colors.gray[900],
        },
        accent: {
          DEFAULT: colors.green[500],
          dark: "#00ff99",
        },
      },
    },
  },
  plugins: [],
}

