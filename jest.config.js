// import type { Config } from "jest";
//import type { Config } from "@jest/types";

const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(test|spec).ts'],
    verbose: true,
};

export default config;
