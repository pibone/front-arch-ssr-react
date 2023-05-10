import '@/styles/main.css'

export const metadata = {
    title: 'Next SSR Archetype',
    description: 'Sample skeleton webpage',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
