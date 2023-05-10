import { {{ pascalCase name }} } from './{{ kebabCase name }}.types'
import axios from 'axios'

type Id = string | number

export const {{ camelCase name }}ApiProto = (
    baseUrl: string = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api', 
    client = axios
) => {
    const endpointUrl = `${baseUrl}/{{ kebabCase name }}`

    const endpoint = (resourceId?: Id) => {
        if (resourceId !== undefined) {
            return `${endpointUrl}/${resourceId}`
        }
        return endpointUrl
    }

    return {
        async list(page: number, size: number) {
            const url = endpoint()
            // const offset = (page - 1) * size
            // const limit = size
            console.debug(
                `Listing {{ pascalCase name }} with page: ${page}, size: ${size}`,
                `on url: ${url}`
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
        },
        async delete(id: Id) {
            const url = endpoint(id)
            console.debug(
                `Deleting {{ pascalCase name }} with id:`,
                id,
                `on url: ${url}`
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
        },
        async create(newValue: {{ pascalCase name }}) {
            const url = endpoint()
            console.debug(
                `Creating {{ pascalCase name }} resource:`,
                newValue,
                `on url: ${{url}}`
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
        },
        async update(updatedValue: {{ pascalCase name }}) {
            const url = endpoint()
            console.debug(
                `updating {{ pascalCase name }} resource:`,
                updatedValue,
                `on url: ${url}`
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
        },
        async get(id: Id) {
            const url = endpoint(id)
            console.debug(
                `Getting {{ pascalCase name }} with id:`,
                id,
                `on url: ${url}`
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
        },
    }
}

export const {{ camelCase name }}Api = {{ camelCase name}}ApiProto()