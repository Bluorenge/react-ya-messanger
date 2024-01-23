module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 1,
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        // 'object-property-newline': [
        //     'error',
        //     { allowAllPropertiesOnSameLine: false },
        // ],
        // 'no-unused-expressions': 'off',
        // '@emotion/jsx-import': 'error',
        // '@emotion/no-vanilla': 'error',
        // '@emotion/import-from-emotion': 'error',
        // '@emotion/styled-import': 'error',
    },
};
