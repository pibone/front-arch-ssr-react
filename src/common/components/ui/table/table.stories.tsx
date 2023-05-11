import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Table } from './table.component'

const meta: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
    render: (p) => (
        <Table
            {...p}
            columns={[
                {
                    Header: 'Identificador',
                    accessor: 'id',
                },
                {
                    Header: 'Valor',
                    accessor: 'valor',
                },
            ]}
            data={[
                { id: 1, valor: 'hola' },
                { id: 2, valor: 'adios' },
            ]}
        />
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('table')

        expect(container).toBeTruthy()
    },
}
