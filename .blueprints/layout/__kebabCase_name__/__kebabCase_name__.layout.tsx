import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './{{ kebabCase name }}.module.scss'

export type {{pascalCase name}}LayoutProps = PropsWithChildren<{}>

export function {{pascalCase name}}Layout(props: {{pascalCase name}}LayoutProps) {
    return <div data-testid="{{ kebabCase name }}-layout" className={classNames(styles.container)}>{props.children}</div>
}
