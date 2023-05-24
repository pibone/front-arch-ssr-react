import React from 'react'
import cn from 'classnames'
import styles from './table.module.css'

export const Root = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div data-testid="table" className={styles.container}>
        <table ref={ref} className={cn(styles.table, className)} {...props} />
    </div>
))
export const TableRoot = Root
Root.displayName = 'Table'

export const Header = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(styles.header, className)} {...props} />
))
export const TableHeader = Header
Header.displayName = 'TableHeader'

export const Body = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(styles.body, className)} {...props} />
))
export const TableBody = Body
Body.displayName = 'TableBody'

export const Footer = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn(styles.footer, className)} {...props} />
))
export const TableFooter = Footer
Footer.displayName = 'TableFooter'

export const Row = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(styles.row, className)} {...props} />
))
export const TableRow = Row
Row.displayName = 'TableRow'

export const Head = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th ref={ref} className={cn(styles.head, className)} {...props} />
))
export const TableHead = Head
Head.displayName = 'TableHead'

export const Cell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td ref={ref} className={cn(styles.cell, className)} {...props} />
))
export const TableCell = Cell
Cell.displayName = 'TableCell'

export const Caption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption ref={ref} className={cn(styles.caption, className)} {...props} />
))
export const TableCaption = Caption
Caption.displayName = 'TableCaption'
