import React from 'react'
import { Column, HeaderGroup, Row, TableBodyProps, useTable } from 'react-table'
import styles from './table.module.css'

export type TableProps<T extends object> = {
    data: T[]
    columns: Column<T>[]
}

export function Table<T extends object>(props: TableProps<T>) {
    const { data, columns } = props
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data })

    return (
        <div data-testid="table" className={styles.container}>
            <table {...getTableProps()} className={styles.table}>
                <TableHeaders headerGroups={headerGroups} />
                <TableBody
                    rows={rows}
                    bodyProps={getTableBodyProps()}
                    prepareRow={prepareRow}
                />
            </table>
        </div>
    )
}

Table.Headers = TableHeaders
Table.Body = TableBody

function TableHeaders<T extends object>({
    headerGroups,
}: {
    headerGroups: HeaderGroup<T>[]
}) {
    return (
        <thead className={styles.header}>
            {headerGroups.map((headerGroup) => {
                const headerGroupProps = headerGroup.getHeaderGroupProps()
                return (
                    <tr
                        {...headerGroupProps}
                        key={headerGroupProps.key}
                        className={''}
                    >
                        {headerGroup.headers.map((column) => {
                            const headerProps = column.getHeaderProps()
                            return (
                                <th
                                    {...headerProps}
                                    key={headerProps.key}
                                    className={styles.cell}
                                >
                                    {column.render('Header')}
                                </th>
                            )
                        })}
                    </tr>
                )
            })}
        </thead>
    )
}

function TableBody<T extends object>({
    rows,
    bodyProps,
    prepareRow,
}: {
    rows: Row<T>[]
    bodyProps: TableBodyProps
    prepareRow: (row: Row<T>) => void
}) {
    return (
        <tbody {...bodyProps} className={styles.body}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr
                        {...row.getRowProps()}
                        key={row.index}
                        className={styles.row}
                    >
                        {row.cells.map((cell) => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    key={cell.column.id}
                                    className={styles.cell}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}
