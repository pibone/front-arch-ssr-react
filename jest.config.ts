import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    modulePathIgnorePatterns: ['<rootDir>/.blueprints'],
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: [
        'jest-extended/all',
        '@testing-library/jest-dom/extend-expect',
    ],
    testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)
