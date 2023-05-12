import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AspectRatio } from './aspect-ratio.component'

const meta: Meta<typeof AspectRatio> = {
    title: 'AspectRatio',
    component: AspectRatio,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
    render: (p) => (
        <AspectRatio
            {...p}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
            }}
            ratio={10}
        >
            <div style={{ height: 10, width: 10, backgroundColor: 'teal' }} />
        </AspectRatio>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('aspect-ratio')

        expect(container).toBeTruthy()
    },
}
