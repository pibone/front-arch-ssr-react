import type { Pagination } from '@/hookey'

export type Pokemon = {
    pokemonId: PokemonId
}

export type PokemonId = number

export type PokemonPaginatedApiResult = {
    results: Pokemon[]
    count: number
}

export type PokemonListApiParams = Pagination.UsePaginatedQueryParams<{}>
