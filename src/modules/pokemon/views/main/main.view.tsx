import React from 'react'
import styles from './main.module.css'
import { PokemonListWidget } from '@/pokemon/widgets/pokemon-list'

type MainViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function MainView(props: MainViewProps) {
    return (
        <div data-testid="main-view" className={styles.container}>
            <PokemonListWidget />
        </div>
    )
}
