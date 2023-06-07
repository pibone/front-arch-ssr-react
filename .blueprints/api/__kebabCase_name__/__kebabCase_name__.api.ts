import { ApiContext, DEFAULT_API_CONTEXT } from '@/common/providers/api-context'
import {
    {{ pascalCase name }}ApiResult,
    {{ pascalCase name }}CreateApiParams,
    {{ pascalCase name }}DeleteApiParams,
    {{ pascalCase name }}GetApiParams,
    {{ pascalCase name }}Id,
    {{ pascalCase name }}ListApiParams,
    {{ pascalCase name }}PaginatedApiResult,
    {{ pascalCase name }}UpdateApiParams,
} from './{{ kebabCase name }}.types'

export const {{ camelCase name }}ApiProto = (
    baseUrl: string = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api',
    defaultApiContext = DEFAULT_API_CONTEXT
) => {
    const endpointUrl = `${baseUrl}/{{ kebabCase name }}`

    type UrlParams = { resourceId?: {{ pascalCase name}}Id }
    const endpoint = (
        urlParams: UrlParams,
        queryParams: Record<string, string>
    ) => {
        const queryParamString = new URLSearchParams(queryParams).toString()
        const resourceIdParam =
            urlParams.resourceId === undefined ? '' : `/${urlParams.resourceId}`

        // TODO: Customize the endpoint url generation here
        return `${endpointUrl}${resourceIdParam}?${queryParamString}`
    }

    return {
        async list(
            this: ApiContext,
            { page, size, ...otherQueryParams }: {{ pascalCase name }}ListApiParams
        ): Promise<{{ pascalCase name }}PaginatedApiResult> {
            const urlParams: UrlParams = {}
            const queryParams = {
                // TODO: Map the pagination params as required by the API
                page: `${page}`,
                size: `${size}`,
                // limit: `${size}`,
                // offset: `${Math.max((page - 1) * size, 0)}`,
                ...otherQueryParams,
            }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Listing {{ pascalCase name }} with page: ${page}, size: ${size}`,
                `on url: ${url}`
            )

            const response = await this.client.get(url)

            // TODO: Add code handle the response if needed

            return response.data as {{ pascalCase name }}PaginatedApiResult
        },
        async delete(
            this: ApiContext,
            { resourceId, ...queryParams }: {{ pascalCase name }}DeleteApiParams
        ): Promise<boolean> {
            const urlParams: UrlParams = { resourceId }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Deleting {{ pascalCase name }} with id:`,
                resourceId,
                `on url: ${url}`
            )

            const response = await this.client.delete(url)

            // TODO: Add code handle the response if needed

            return response.status >= 200 && response.status < 300
        },
        async create(
            this: ApiContext,
            { newResource, ...queryParams }: {{ pascalCase name }}CreateApiParams
        ): Promise<{{ pascalCase name }}Id> {
            const urlParams: UrlParams = {}
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Creating {{ pascalCase name }} resource:`,
                newResource,
                `on url: ${url}`
            )
            const response = await this.client.post(url, newResource)

            // TODO: Add code handle the response if needed

            // TODO: Adapt code to handle the receiving of the resourceId (if any)
            const locationHeader = response.headers.location as
                | string
                | undefined

            if (locationHeader) {
                const segments = new URL(locationHeader).pathname.split('/')
                const lastIdx = segments.length - 1
                const resourceId =
                    segments[lastIdx] || segments[Math.max(lastIdx - 1, 0)]
                if (!resourceId)
                    console.warn(new Error('Invalid location header received'))
                return resourceId as {{ pascalCase name }}Id
            }

            console.warn(new Error('No location header received'))
            return '' as {{ pascalCase name }}Id
        },
        async update(
            this: ApiContext,
            {
                updatedResource,
                // resourceId,
                ...queryParams
            }: {{ pascalCase name }}UpdateApiParams
        ): Promise<boolean> {
            const urlParams: UrlParams = {
                // resourceId
            }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `updating {{ pascalCase name }} resource:`,
                updatedResource,
                `on url: ${url}`
            )
            const response = await this.client.put(url, updatedResource)

            // TODO: Add code handle the response if needed

            return response.status >= 200 && response.status < 300
        },
        async get(
            this: ApiContext,
            { resourceId, ...queryParams }: {{ pascalCase name }}GetApiParams
        ): Promise<{{ pascalCase name }}ApiResult> {
            const urlParams: UrlParams = {
                resourceId,
            }
            const url = endpoint(urlParams, queryParams)
            console.debug(
                `Getting {{ pascalCase name }} with id:`,
                resourceId,
                `on url: ${url}`
            )

            const response = await this.client.get(url)

            // TODO: Add code handle the response if needed

            return response.data as {{ pascalCase name }}ApiResult
        },
        ...defaultApiContext,
    }
}

export const {{ camelCase name }}Api = {{ camelCase name }}ApiProto()
