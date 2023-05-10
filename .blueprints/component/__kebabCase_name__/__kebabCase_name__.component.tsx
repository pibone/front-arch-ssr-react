import React from 'react'
import styles from './{{ kebabCase name }}.module.css'

export type {{pascalCase name}}Props = {}

export function {{pascalCase name}}(props: {{pascalCase name}}Props) {
    return <div data-testid="{{ kebabCase name }}" className={styles.container}></div>
}
