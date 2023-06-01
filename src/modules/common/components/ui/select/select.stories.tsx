import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Select from './select.component'
import { useState } from 'react'
import { Button } from '../button'

const meta: Meta<typeof Select.Root> = {
    title: 'Select',
    component: Select.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select.Root>

export const Default: Story = {
    render: function Render({ ...p }) {
        const [selected, setSelected] = useState<string>()
        return (
            <div className="space-y-2">
                <Select.Root
                    value={selected}
                    onValueChange={setSelected}
                    {...p}
                >
                    <Select.Trigger className="w-[180px]">
                        <Select.Value placeholder="Theme" />
                    </Select.Trigger>
                    <Select.Content position="popper">
                        <Select.Group>
                            <Select.Item value="light">Light</Select.Item>
                            <Select.Item value="dark">Dark</Select.Item>
                        </Select.Group>
                        <Select.Item value="system">System</Select.Item>
                    </Select.Content>
                </Select.Root>
                <Button onClick={() => setSelected(undefined)}>
                    Deselect all
                </Button>
            </div>
        )
    },
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('select')

        expect(container).toBeTruthy()
    },
}
