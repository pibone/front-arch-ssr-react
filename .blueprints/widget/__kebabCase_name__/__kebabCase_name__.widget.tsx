import React from 'react'
import classNames from 'classnames'
import styles from './{{ kebabCase name }}.module.scss'

export type {{pascalCase name}}WidgetProps = {}

export function {{pascalCase name}}Widget(props: {{pascalCase name}}WidgetProps) {
    return <div data-testid="{{ kebabCase name }}-widget" className={classNames(styles.container)}></div>
}
