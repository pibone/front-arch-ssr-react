import { useQuery } from '@tanstack/react-query'
import { Pagination } from '@/hookey'
import { useApiContext } from '@/common/providers/api-context'
import { {{ camelCase name }}Api } from './{{ kebabCase name }}.api'
import { {{ pascalCase name }}GetApiParams } from './{{ kebabCase name }}.types'

export const use{{ pascalCase name }}s = Pagination.makePaginationHook({
    cacheKey: '{{ kebabCase name }}-api-list',
    clientFn: {{ camelCase name }}Api.list,
    useApiContext: useApiContext,
    // TODO: Connect getCount and getPageData with the list response data
    getCount: (data) => data.count,
    getPageData: (data) => data.results,
})

export const use{{ pascalCase name }} = (params: {{ pascalCase name }}GetApiParams) => {
    return useQuery(
        ['{{ kebabCase name }}-api-get', params] as [string, typeof params],
        ({ queryKey: [_key, params] }) => {{ camelCase name }}Api.get(params)
    )
}
