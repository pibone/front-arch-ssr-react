/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
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
            colors: {
                primary: {
                    DEFAULT: '#0f172a',
                    fg: '#f8fafc',
                },
                secondary: {
                    DEFAULT: '#f1f5f9',
                    fg: '#0f172a',
                },
                accent: {
                    DEFAULT: '#f1f5f9',
                    fg: '#0f172a',
                },
                destructive: {
                    DEFAULT: '#ff0000',
                    fg: '#f8fafc',
                },
                popover: {
                    DEFAULT: '#ffffff',
                    fg: '#0f172a',
                },
                card: {
                    DEFAULT: '#ffffff',
                    fg: '#0f172a',
                },
                muted: {
                    DEFAULT: '#f1f5f9',
                    fg: '#64748b',
                },
                background: '#ffffff',
                foreground: '#0f172a',
                ring: '#94a3b8',
                input: '#e2e8f0',
                border: '#e2e8f0',
            },
        },
    },

    plugins: [],
}
