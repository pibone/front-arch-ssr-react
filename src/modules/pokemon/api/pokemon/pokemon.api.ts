import { ApiContext, DEFAULT_API_CONTEXT } from '@/common/providers/api-context'
import {
    PokemonApiResult,
    PokemonGetApiParams,
    PokemonId,
    PokemonListApiParams,
    PokemonPaginatedApiResult,
} from './pokemon.types'

export const pokemonApiProto = (
    baseUrl: string = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api',
    defaultApiContext = DEFAULT_API_CONTEXT
) => {
    const endpointUrl = `${baseUrl}/pokemon`

    type UrlParams = { resourceId?: PokemonId }
    const endpoint = (
        urlParams: UrlParams,
        queryParams: Record<string, string>
    ) => {
        const queryParamString = new URLSearchParams(queryParams).toString()
        const resourceIdParam =
            urlParams.resourceId === undefined ? '' : `/${urlParams.resourceId}`

        return `${endpointUrl}${resourceIdParam}?${queryParamString}`
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
        async get(
            this: ApiContext,
            { resourceId, ...queryParams }: PokemonGetApiParams
        ): Promise<PokemonApiResult> {
            const urlParams: UrlParams = {
                resourceId,
            }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Getting Pokemon with id:`,
                resourceId,
                `on url: ${url}`
            )

            const response = await this.client.get(url)

            return response.data as PokemonApiResult
        },
        ...defaultApiContext,
    }
}

export const pokemonApi = pokemonApiProto()
