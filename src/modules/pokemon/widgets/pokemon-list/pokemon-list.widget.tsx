import React from 'react'
import styles from './pokemon-list.module.css'
import { usePokemons } from '@/pokemon/api/pokemon'
import { Button } from '@/common/components/ui/button'
import { PokemonCardWidget } from '../pokemon-card'

export type PokemonListWidgetProps = {}

export function PokemonListWidget(props: PokemonListWidgetProps) {
    const { pagination } = usePokemons({ size: 20 })
    return (
        <div data-testid="pokemon-list-widget" className={styles.container}>
            <div className={styles.pokedexGrid}>
                {pagination.pageData?.map((d) => (
                    <PokemonCardWidget key={d.name} pokemonName={d.name} />
                ))}
            </div>
            <div>
                <Button onClick={pagination.goToFirstPage}>First</Button>
                <Button onClick={pagination.goToPrevPage}>Previous</Button>
                {pagination.currentPage}
                <Button onClick={pagination.goToNextPage}>Next</Button>
                <Button onClick={pagination.goToLastPage}>Last</Button>
                Total pages: {pagination.totalPages}
            </div>
        </div>
    )
}
