import { useQuery } from '@tanstack/react-query'
import { Pagination } from '@/hookey'
import { useApiContext } from '@/common/providers/api-context'
import { pokemonApi } from './pokemon.api'
import { PokemonGetApiParams } from './pokemon.types'

export const usePokemons = Pagination.makePaginationHook({
    cacheKey: 'pokemon-api-list',
    clientFn: pokemonApi.list,
    useApiContext: useApiContext,
    getCount: (data) => data.count,
    getPageData: (data) => data.results,
})

export const usePokemon = (params: PokemonGetApiParams) => {
    return useQuery(
        ['pokemon-api-get', params] as [string, typeof params],
        ({ queryKey: [_key, params] }) => pokemonApi.get(params)
    )
}
