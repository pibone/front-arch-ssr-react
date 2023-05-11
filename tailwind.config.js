const { fontFamily } = require('tailwindcss/defaultTheme')

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
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            borderRadius: {
                lg: `0.5rem`,
                md: `calc(0.5rem - 2px)`,
                sm: 'calc(0.5rem - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            variables: {
                DEFAULT: {
                    color: {
                        primary: {
                            DEFAULT: 'var(--color-primary-100)',
                            100: '15 23 42',
                            500: '100 116 139',
                            900: '226 232 240',
                        },
                        secondary: '241 245 249',
                        white: '255 255 255',
                        black: 'var(--color-primary-100)',
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
                background: '#ffffff',
                foreground: '#0f172a',
                ring: '#94a3b8',
                input: '#e2e8f0',
                border: '#e2e8f0',
            },
        },
    },

    plugins: [
        require('tailwindcss-animate'),
        require('@mertasan/tailwindcss-variables'),
    ],
}
