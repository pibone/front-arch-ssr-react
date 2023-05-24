import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Textarea } from './textarea.component'
import { Label } from '../label'
import { Button } from '../button'

const meta: Meta<typeof Textarea> = {
    title: 'Textarea',
    component: Textarea,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
    render: (p) => (
        <>
            <div className="grid w-[400px] gap-1.5">
                <Label htmlFor="message-2">Your Message</Label>
                <Textarea
                    placeholder="Type your message"
                    {...p}
                    id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                    Your message will be copied to the support team.
                </p>
                <Button>Send message</Button>
            </div>
        </>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('textarea')

        expect(container).toBeTruthy()
    },
}
