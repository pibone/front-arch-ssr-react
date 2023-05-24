import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Skeleton } from './skeleton.component'

const meta: Meta<typeof Skeleton> = {
    title: 'Skeleton',
    component: Skeleton,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
    render: () => <Skeleton className="w-[100px] h-[20px] rounded-full" />,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('skeleton')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] rounded-md" />
                <Skeleton className="h-4 w-[200px] rounded-md" />
            </div>
        </div>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('skeleton')

        expect(container).toBeTruthy()
    },
}
