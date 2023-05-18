module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'typescript-eslint/parser'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'typescript-eslint/prefer-nullish-coalescing': 'off'
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts.tsx}']
        }
    ]
}
