import React from 'react'
import classNames from 'classnames'
import styles from './{{ kebabCase name }}.module.scss'

export function {{pascalCase name}}View() {
    return <div data-testid="{{ kebabCase name }}-view" className={classNames(styles.container)}></div>
}
