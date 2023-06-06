import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Map from './map.component'

const meta: Meta<typeof Map.Root> = {
    title: 'Map',
    component: Map.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Map>

export const Default: Story = {
    render: (p) => {
        const location: [number, number] = [40.9634385, -5.6692121]
        return (
            <Map.Root
                center={location}
                zoom={13}
                scrollWheelZoom={false}
                className="h-80"
                {...p}
            >
                <Map.Marker position={location}>
                    <Map.Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Map.Popup>
                </Map.Marker>
            </Map.Root>
        )
    },
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('map')

        expect(container).toBeTruthy()
    },
}
