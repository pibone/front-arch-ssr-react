import React from 'react'
import styles from './main.module.css'

export function MainView() {
    const users = [{ id: 1, username: 'user' }]
    return (
        <div data-testid="main-view" className={styles.container}>
            <ol>
                {users.map((u) => (
                    <li key={u.id}>{u.username}</li>
                ))}
            </ol>
        </div>
    )
}
