import React, { useState } from 'react'
import styles from './footer.module.css'
import { useQuery } from '@tanstack/react-query'
import { Pagination } from '@/hooker'

const pokemonApi = {
    baseUrl: 'https://pokeapi.co/api/v2/pokemon',
    async list({
        page,
        size,
    }: Pagination.UsePaginatedQueryParams): Promise<
        pokeapi.PaginatedApiResult<Pokemon>
    > {
        const queryParams: Record<string, string> = {
            limit: `${size}`,
            offset: `${Math.max((page - 1) * size, 0)}`,
        }
        console.log(queryParams, page, size)

        const response = await fetch(
            `${this.baseUrl}?${new URLSearchParams(queryParams).toString()}`,
            {
                mode: 'cors',
            }
        )
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return (await response.json()) as pokeapi.PaginatedApiResult<Pokemon>
    },
    async get({ id }: { id: string }) {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            mode: 'cors',
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    },
}

type Pokemon = {}

module pokeapi {
    export type ApiResult<TData extends {}> = {
        results: TData
    }

    export type PaginatedApiResult<TResource extends {}> = ApiResult<
        TResource[]
    > & {
        count: number
    }
}

function usePokemons(
    options: Pagination.UsePaginatedQueryOptions<{
        filter: string
    }>
): Pagination.UsePaginatedQueryResult<
    Pokemon,
    pokeapi.PaginatedApiResult<Pokemon>
> {
    const [page, setPage] = useState(1)
    const params: Pagination.UsePaginatedQueryParams<typeof options> = {
        ...options,
        page,
    }
    const query = useQuery({
        queryKey: ['pokemons', params] as [string, typeof params],
        queryFn: async ({ queryKey: [_key, params] }) =>
            pokemonApi.list(params),
    })

    return {
        pagination: Pagination.getPaginationControls(
            page,
            setPage,
            options.size,
            query.data?.count,
            query.data?.results
        ),
        ...query,
    }
}

export type FooterWidgetProps = {}

export function FooterWidget(props: FooterWidgetProps) {
    const { isError, isLoading, pagination, error } = usePokemons({
        size: 20,
        filter: 'hola',
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError && error) {
        return <span>Error: {(error as Error).message}</span>
    }
    return (
        <div data-testid="footer-widget" className={styles.container}>
            {`${JSON.stringify(pagination.pageData)}`}
            <div>
                <button onClick={pagination.goToPrevPage}>Prev</button>
                {pagination.currentPage}
                <button onClick={pagination.goToNextPage}>Next</button>
            </div>
        </div>
    )
}
