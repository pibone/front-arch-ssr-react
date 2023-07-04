import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { PatientDetailView } from './patient-detail.view'

const meta: Meta<typeof PatientDetailView> = {
    title: 'PatientDetailView',
    component: PatientDetailView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof PatientDetailView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('patient-detail-view')

        expect(container).toBeTruthy()
    },
}
