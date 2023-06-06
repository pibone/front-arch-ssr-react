import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

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

    export type UsePaginatedQueryResult<TResource, TData, TError = unknown> = {
        pagination: PaginationControls<TResource>
        data: TData | undefined
        error: TError | undefined
        isLoading: boolean
        isFetching: boolean
        isError: boolean
        isSuccess: boolean
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
        TApiResult extends object = {}
    >({
        cacheKey,
        clientFn,
        getCount,
        getPageData,
    }: {
        cacheKey: string
        clientFn: (
            params: Pagination.UsePaginatedQueryParams<TParams>
        ) => Promise<TApiResult>
        getCount: (result: TApiResult) => number
        getPageData: (result: TApiResult) => TResource[]
    }) {
        return function usePagination(
            options: Pagination.UsePaginatedQueryOptions<TParams>
        ): Pagination.UsePaginatedQueryResult<TResource, TApiResult> {
            const [page, setPage] = useState(1)
            const params: Pagination.UsePaginatedQueryParams<typeof options> = {
                ...options,
                page,
            }
            const query = useQuery({
                queryKey: [cacheKey, params] as [string, typeof params],
                queryFn: async ({ queryKey: [_key, params] }) =>
                    Promise.resolve(clientFn(params)),
            })

            return {
                pagination: Pagination.getPaginationControls(
                    page,
                    setPage,
                    options.size,
                    query.data !== undefined ? getCount(query.data) : undefined,
                    query.data !== undefined
                        ? getPageData(query.data)
                        : undefined
                ),
                ...query,
            }
        }
    }
}
