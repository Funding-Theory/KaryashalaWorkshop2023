/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['Lexend Deca', 'system-ui']

module.exports = {
    // darkMode: 'class',
    theme: {
        fontFamily: fontFamily,
        extend: {
            keyframes: {
                'scale-fade-in': {
                    '0%': { transform: 'scale(.95)', opacity: 0 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
            },
            animation: {
                'scale-fade-in': 'scale-fade-in .1s ease-in-out',
            },
        },
    },
    content: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './nuxt.config.{js,ts}',
        './plugins/**/*.{js,ts}',
        './components/**/*.{js,vue,ts}',
        './node_modules/flowbite.{js,ts}',
    ],
    plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
}
