const { fontFamily } = require('tailwindcss/defaultTheme')

const radixHeightCSSVars =
    'var(--radix-accordion-content-height, var(--radix-collapsible-content-height))'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'radix-slide-down': {
                    from: { height: 0 },
                    to: { height: radixHeightCSSVars },
                },
                'radix-slide-up': {
                    from: { height: radixHeightCSSVars },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'radix-slide-down 0.2s ease-out',
                'accordion-up': 'radix-slide-up 0.2s ease-out',
                'collapsible-down': 'radix-slide-down 0.2s ease-out',
                'collapsible-up': 'radix-slide-up 0.2s ease-out',
            },
            borderRadius: {
                lg: `0.5rem`,
                md: `calc(0.5rem - 2px)`,
                sm: 'calc(0.5rem - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-sans, Lexend)', ...fontFamily.sans],
            },
            variables: {
                DEFAULT: {
                    color: {
                        primary: {
                            DEFAULT: 'var(--color-primary-100)',
                            100: '15 23 42',
                            500: '100 116 139',
                            700: '148 163 184',
                            900: '226 232 240',
                        },
                        secondary: '241 245 249',
                        white: '255 255 255',
                        danger: '255 0 0',
                    },
                },
            },
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
                    fg: 'rgb(var(--color-secondary) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
                    fg: 'rgb(var(--color-primary) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
                    fg: 'rgb(var(--color-primary) / <alpha-value>)',
                },
                danger: {
                    DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
                    fg: 'rgb(var(--color-secondary) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'rgb(var(--color-white) / <alpha-value>)',
                    fg: 'rgb(var(--color-primary) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'rgb(var(--color-white) / <alpha-value>)',
                    fg: 'rgb(var(--color-primary) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
                    fg: 'rgb(var(--color-primary-500) / <alpha-value>)',
                },
                background: 'rgb(var(--color-white) / <alpha-value>)',
                foreground: 'rgb(var(--color-primary) / <alpha-value>)',
                ring: 'rgb(var(--color-primary-700) / <alpha-value>)',
                input: 'rgb(var(--color-primary-900) / <alpha-value>)',
                border: 'rgb(var(--color-primary-900) / <alpha-value>)',
            },
        },
    },

    plugins: [
        require('tailwindcss-animate'),
        require('@mertasan/tailwindcss-variables'),
    ],
}
