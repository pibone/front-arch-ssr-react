import React from 'react'
import styles from './{{ kebabCase name }}.module.css'

export type {{pascalCase name}}WidgetProps = {}

export function {{pascalCase name}}Widget(props: {{pascalCase name}}WidgetProps) {
    return <div data-testid="{{ kebabCase name }}-widget" className={styles.container}></div>
}
