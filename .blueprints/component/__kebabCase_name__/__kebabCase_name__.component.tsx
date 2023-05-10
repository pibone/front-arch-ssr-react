import React from 'react'
import classNames from 'classnames'
import styles from './{{ kebabCase name }}.module.scss'

export type {{pascalCase name}}Props = {}

export function {{pascalCase name}}(props: {{pascalCase name}}Props) {
    return <div data-testid="{{ kebabCase name }}" className={classNames(styles.container)}></div>
}
