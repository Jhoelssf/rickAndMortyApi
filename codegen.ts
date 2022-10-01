import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://rickandmortyapi.com/graphql',
    generates: {
        './src/types.ts': {
            plugins: ['typescript']
        }
    }
}
export default config
