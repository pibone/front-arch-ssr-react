import '@/styles/main.css'
import { RootLayout } from '@/modules/app/layouts/root'
import { ApplicationLayout } from '@/modules/app/layouts/application'
import { PropsWithChildren } from 'react'

export const metadata = {
    title: 'Next SSR Archetype',
    description: 'Sample skeleton webpage',
}

export default function Layout(props: PropsWithChildren) {
    return (
        <RootLayout>
            <ApplicationLayout>{props.children}</ApplicationLayout>
        </RootLayout>
    )
}
