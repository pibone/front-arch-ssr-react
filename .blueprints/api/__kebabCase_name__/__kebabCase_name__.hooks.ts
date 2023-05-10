
import { {{ camelCase name }}Api } from './{{ kebabCase name }}.api'
import { useQuery } from 'react-query'

export function use{{ pascalCase name }}ListQuery(page: number, size: number) {
    const {
        data: payload,
        isFetching,
        status,
        error,
    } = useQuery(['{{ kebabCase name }}-api', {page, size}], () => 
        {{ camelCase name }}Api.list(1, 10)
    )

    return { payload, isFetching, status, error, api: {{ camelCase name }}Api }
}