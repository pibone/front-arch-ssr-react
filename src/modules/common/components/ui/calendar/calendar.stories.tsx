import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Calendar } from './calendar.component'

const meta: Meta<typeof Calendar> = {
    title: 'Calendar',
    component: Calendar,
    argTypes: {
        selected: {
            control: 'date',
            type: 'number',
            defaultValue: Date.now(),
        },
        onSelect: {
            action: 'onSelect',
            control: 'none',
        },
    },
}

// Check React DayPicker -> https://react-day-picker.js.org/

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
    render: (p) => {
        return <Calendar {...p} selected={new Date(p.selected)} mode="single" />
    },
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('calendar')

        expect(container).toBeTruthy()
    },
}
