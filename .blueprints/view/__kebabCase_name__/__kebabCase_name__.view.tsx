import React from 'react'
import styles from './{{ kebabCase name }}.module.css'

type {{pascalCase name}}ViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function {{pascalCase name}}View(props: {{pascalCase name}}ViewProps) {
    return <div data-testid="{{ kebabCase name }}-view" className={styles.container}></div>
}
