import { ApiContext, DEFAULT_API_CONTEXT } from '@/common/providers/api-context'
import {
    PokemonListApiParams,
    PokemonPaginatedApiResult,
} from './pokemon.types'

export const pokemonApiProto = (
    baseUrl: string = 'https://pokeapi.co/api/v2',
    defaultApiContext = DEFAULT_API_CONTEXT
) => {
    const endpointUrl = `${baseUrl}/pokemon`

    type UrlParams = {}
    const endpoint = (
        urlParams: UrlParams,
        queryParams: Record<string, string>
    ) => {
        const queryParamString = new URLSearchParams(queryParams).toString()

        return `${endpointUrl}?${queryParamString}`
    }

    return {
        async list(
            this: ApiContext,
            { page, size, ...otherQueryParams }: PokemonListApiParams
        ): Promise<PokemonPaginatedApiResult> {
            const urlParams: UrlParams = {}
            const queryParams = {
                limit: `${size}`,
                offset: `${Math.max((page - 1) * size, 0)}`,
                ...otherQueryParams,
            }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Listing Pokemon with page: ${page}, size: ${size}`,
                `on url: ${url}`
            )

            const response = await this.client.get(url)

            return response.data as PokemonPaginatedApiResult
        },
        ...defaultApiContext,
    }
}

export const pokemonApi = pokemonApiProto()
