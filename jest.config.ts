// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: "jest-environment-jsdom",
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(svg|png|jpg|jpeg|gif|bmp|tiff)$': 'jest-transform-stub',
    },
    testMatch: [
        '<rootDir>/**/*.(test|spec).ts?(x)',
    ],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
};

export default config;
