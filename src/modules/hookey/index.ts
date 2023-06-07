import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosInstance } from 'axios'
import { useCallback, useMemo, useState } from 'react'

export namespace Pagination {
    export type UsePaginatedQueryOptions<TExtension extends object = {}> = {
        size: number
    } & TExtension

    export type UsePaginatedQueryParams<TExtension extends object = {}> = {
        size: number
        page: number
    } & TExtension

    export type PaginationControls<TResource> = {
        currentPage: number
        goToPage: (page: number) => Promise<void>
        goToPrevPage: () => Promise<void>
        goToNextPage: () => Promise<void>
        goToFirstPage: () => Promise<void>
        goToLastPage: () => Promise<void>
        totalPages: number | undefined
        pageData: TResource[] | undefined
    }

    export type UsePaginatedQueryResult<
        TResource,
        TData,
        TError = unknown
    > = UseQueryResult<TData, TError> & {
        pagination: PaginationControls<TResource>
        invalidateCache: () => Promise<void>
    }

    export function getPaginationControls<TResource>(
        currentPage: number,
        goToPage: (page: number) => Promise<void> | void,
        pageSize: number,
        elementCount: number | undefined,
        pageData: TResource[] | undefined
    ): PaginationControls<TResource> {
        const totalPages = elementCount
            ? Math.ceil(Math.max(1, elementCount) / pageSize)
            : undefined
        const goTo = (page: number) => {
            const clampledValue = Math.min(totalPages ?? 1, Math.max(1, page))
            return Promise.resolve(goToPage(clampledValue))
        }
        return {
            currentPage,
            goToPage: goTo,
            pageData,
            totalPages,
            goToNextPage: () => goTo(currentPage + 1),
            goToPrevPage: () => goTo(currentPage - 1),
            goToFirstPage: () => goTo(1),
            goToLastPage: () => goTo(totalPages ?? 1),
        }
    }

    export function makePaginationHook<
        TParams extends {} = {},
        TResource extends object = {},
        TApiResult extends object = {},
        TApiContext extends { client: any } = { client: AxiosInstance }
    >({
        cacheKey: stringOrArrayCacheKey,
        useApiContext,
        clientFn,
        getCount,
        getPageData,
    }: {
        cacheKey: string | string[]
        useApiContext: () => TApiContext
        clientFn: <T extends TApiContext>(
            this: T,
            params: Pagination.UsePaginatedQueryParams<TParams>
        ) => Promise<TApiResult>
        getCount: (result: TApiResult) => number
        getPageData: (result: TApiResult) => TResource[]
    }) {
        const cacheKey = Array.isArray(stringOrArrayCacheKey)
            ? stringOrArrayCacheKey
            : [stringOrArrayCacheKey]
        return function usePagination(
            options: Pagination.UsePaginatedQueryOptions<TParams>
        ): Pagination.UsePaginatedQueryResult<TResource, TApiResult> {
            const [page, setPage] = useState(1)
            const apiContext = useApiContext()
            const params: Pagination.UsePaginatedQueryParams<typeof options> = {
                ...options,
                page,
            }
            const query = useQuery({
                queryKey: [...cacheKey, params] as [string, typeof params],
                queryFn: async ({ queryKey: [_key, params] }) =>
                    Promise.resolve(clientFn.call(apiContext, params)),
            })

            const queryClient = useQueryClient()

            return {
                pagination: useMemo(
                    () =>
                        Pagination.getPaginationControls(
                            page,
                            setPage,
                            options.size,
                            query.data !== undefined
                                ? getCount(query.data)
                                : undefined,
                            query.data !== undefined
                                ? getPageData(query.data)
                                : undefined
                        ),
                    [options.size, page, query.data]
                ),
                invalidateCache: useCallback(
                    () => queryClient.invalidateQueries(cacheKey),
                    [queryClient]
                ),
                ...query,
            }
        }
    }
}
