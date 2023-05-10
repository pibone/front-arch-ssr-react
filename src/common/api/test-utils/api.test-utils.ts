import { RequestOptions, ResponseOptions } from '@pact-foundation/pact'
import { pactWith, JestPactOptions } from 'jest-pact'

export type PactTestConfig<TClient> = Omit<RequestOptions, 'path'> & {
    path?: string
    responsePact: ResponseOptions
    test: (
        it: (name: string, testFn: (client: TClient) => Promise<any>) => void
    ) => void
    endpointAppend?: string
}

export function apiPactWith<TClient>(config: {
    pactConfig: Omit<JestPactOptions, 'dir'>
    name: string
    endpoint: string
    createClient: (baseUrl: string) => TClient
    tests: {
        [k: string]: PactTestConfig<TClient>
    }
}) {
    pactWith({ dir: './pact/contracts', ...config.pactConfig }, (provider) => {
        let client: TClient
        beforeEach(() => {
            client = config.createClient(provider.mockService.baseUrl)
        })

        function test_it(
            name: string,
            testFn: (client: TClient) => Promise<any>
        ) {
            it(name, () => testFn(client))
        }

        for (const key in config.tests) {
            const testConfig = config.tests[key]
            describe(`${key} ${config.name}`, () => {
                beforeEach(() => {
                    const promises = [
                        provider.addInteraction({
                            state: `A resource ${config.name} is available for ${key}`,
                            uponReceiving: `A request to ${key} arrives`,
                            willRespondWith: testConfig.responsePact,
                            withRequest: {
                                path: [config.endpoint, testConfig.path]
                                    .filter(Boolean)
                                    .join('/'),
                                method: testConfig.method,
                                query: testConfig.query,
                                body: testConfig.body,
                                headers: testConfig.headers,
                            },
                        }),
                    ]

                    return Promise.all(promises)
                })

                testConfig.test(test_it)
            })
        }
    })
}
