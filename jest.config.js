const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/__tests__/**/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{tsx,ts}",
    "!<rootDir>/src/styles/*.{tsx,ts}",
    "!<rootDir>/src/styles/components/*.{tsx,ts}",
    "!<rootDir>/src/pages/_app.tsx",
    "!<rootDir>/src/pages/_document.tsx",
    "!<rootDir>/node_modules/",
    "!<rootDir>/**/__tests__/**",
    "!<rootDir>/**/*.d.ts",
  ],
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

const jestConfig = async () => {
  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG stub first
      "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
