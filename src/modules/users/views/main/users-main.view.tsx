import React from 'react'
import styles from './users-main.module.css'

export function UsersMainView() {
    const users = [{ id: 1, username: 'user' }]
    return (
        <div data-testid="users-main-view" className={styles.container}>
            <ol>
                {users.map((u) => (
                    <li key={u.id}>{u.username}</li>
                ))}
            </ol>
        </div>
    )
}
