import React from 'react'
import styles from './pokemon-card.module.css'
import { usePokemon } from '@/pokemon/api/pokemon'
import * as Card from '@/common/components/ui/card'

export type PokemonCardWidgetProps = { pokemonName: string }

export function PokemonCardWidget(props: PokemonCardWidgetProps) {
    const { data } = usePokemon({ resourceId: props.pokemonName })
    return (
        <Card.Root
            data-testid="pokemon-card-widget"
            className={styles.container}
        >
            <Card.Header>
                <Card.Title>{data?.name}</Card.Title>
            </Card.Header>
            <Card.Description>
                <img src={data?.sprites.front_default} alt="Pokemon" />
            </Card.Description>
            <Card.Footer>
                Weight: {data?.weight} Kg <br />
                Height: {data?.height} meters
            </Card.Footer>
        </Card.Root>
    )
}
