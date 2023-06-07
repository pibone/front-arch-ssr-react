import type { Pagination } from '@/hookey'

export type {{ pascalCase name }} = {
    {{ camelCase name }}Id: {{ pascalCase name }}Id
}

// TODO: Set the id type
export type {{ pascalCase name }}Id = string | number

export type {{ pascalCase name }}ApiResult = {
    // TODO: Replace with actual get api result
    results: {{ pascalCase name }}
}

export type {{ pascalCase name }}PaginatedApiResult = {
    // TODO: Replace with actual list api result
    results: {{ pascalCase name }}[]
    count: number
}

export type {{ pascalCase name }}ListApiParams = Pagination.UsePaginatedQueryParams<{
    // TODO: Add other params here
}>

export type {{ pascalCase name }}GetApiParams = {
    resourceId: {{ pascalCase name }}Id
    // TODO: Add other params here
}

export type {{ pascalCase name }}CreateApiParams = {
    newResource: Omit<{{ pascalCase name }}, '{{ camelCase name }}Id'>
    // TODO: Add other params here
}

export type {{ pascalCase name }}UpdateApiParams = {
    updatedResource: {{ pascalCase name }}
    // TODO: Switch params if the api requires an id in the url for updates
    // updatedResource: Omit<{{ pascalCase name }}, '{{ camelCase name }}Id'>
    // resourceId: {{ pascalCase name }}Id
    // TODO: Add other params here
}

export type {{ pascalCase name }}DeleteApiParams = {
    resourceId: {{ pascalCase name }}Id
    // TODO: Add other params here
}
