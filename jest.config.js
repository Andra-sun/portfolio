module.exports = {
    // A lista de diretórios que o Jest deve procurar por arquivos de teste
    roots: ["<rootDir>/src"],

    // Padrão de arquivos de teste
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

    // Configurações de cobertura de código
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/index.js",
        "!src/reportWebVitals.js",
        "!src/**/*.d.ts",
    ],

    // Configurações do ambiente de teste
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

    // Transformações de arquivo
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },

    // Módulos a serem ignorados nos testes
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    },

    // Ambiente de teste
    testEnvironment: "jsdom",

    // Configurações de cobertura
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
};
