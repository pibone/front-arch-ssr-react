
import { {{ camelCase name }}ApiProto } from './{{ kebabCase name }}.api'
import { apiPactWith } from '@/common/api/test-utils'
import { {{ camelCase name }}Sampler } from './{{ kebabCase name }}.sample'

apiPactWith({
    pactConfig: {
        consumer: '{{ kebabCase name }}-consumer',
        provider: '{{ kebabCase name }}-provider',
    },
    endpoint: '/{{ kebabCase name }}',
    name: '{{ pascalCase name }}',
    createClient: (baseUrl: string) => {{ camelCase name }}ApiProto(baseUrl)
    tests: {},
})