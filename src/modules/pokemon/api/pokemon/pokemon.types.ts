import type { Pagination } from '@/hookey'

export type PokemonListItem = {
    name: PokemonId
}

export type PokemonComplete = PokemonListItem & {
    id: number
    height: number
    weight: number
    sprites: {
        front_default: string
    }
}

export type PokemonId = string

export type PokemonApiResult = PokemonComplete

export type PokemonPaginatedApiResult = {
    results: PokemonListItem[]
    count: number
}

export type PokemonListApiParams = Pagination.UsePaginatedQueryParams<{}>

export type PokemonGetApiParams = {
    resourceId: PokemonId
}
