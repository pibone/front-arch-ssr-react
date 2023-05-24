import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { ScrollArea } from './scroll-area.component'

const meta: Meta<typeof ScrollArea> = {
    title: 'ScrollArea',
    component: ScrollArea,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
    render: (p) => (
        <ScrollArea
            className="h-[200px] w-[350px] rounded-md border p-4"
            {...p}
        >
            <div>
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the
                king&apos;s pillow, in his soup, even in the royal toilet. The
                king was furious, but he couldn&apos;t seem to stop Jokester.
                And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn&apos;t
                help but laugh. And once they started laughing, they
                couldn&apos;t stop.
            </div>
        </ScrollArea>
    ),
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('scroll-area')

        expect(container).toBeTruthy()
    },
}
