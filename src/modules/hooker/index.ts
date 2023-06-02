export namespace Pagination {
    export type UsePaginatedQueryOptions<TExtension extends object = {}> = {
        size: number
    } & TExtension
    export type UsePaginatedQueryParams<
        TUsePaginatedQueryOptions extends UsePaginatedQueryOptions = UsePaginatedQueryOptions
    > = UsePaginatedQueryOptions<
        {
            page: number
        } & TUsePaginatedQueryOptions
    >

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
            ? Math.max(1, elementCount) / pageSize
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
}
