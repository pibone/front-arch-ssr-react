import React, { PropsWithChildren } from 'react'
import styles from './{{ kebabCase name }}.module.css'

export type {{pascalCase name}}LayoutProps = PropsWithChildren<{}>

export function {{pascalCase name}}Layout(props: {{pascalCase name}}LayoutProps) {
    return <div data-testid="{{ kebabCase name }}-layout" className={styles.container}>{props.children}</div>
}
