import { Pagination } from '@/hookey'
import { useApiContext } from '@/common/providers/api-context'
import { pokemonApi } from './pokemon.api'

export const usePokemons = Pagination.makePaginationHook({
    cacheKey: 'pokemon-api-list',
    clientFn: pokemonApi.list,
    useApiContext: useApiContext,
    getCount: (data) => data.count,
    getPageData: (data) => data.results,
})
