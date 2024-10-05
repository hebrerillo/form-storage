/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          "@babel/preset-typescript",
        ],
      },
    ],
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      {
        presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ['<rootDir>/src/', "<rootDir>/node_modules/"],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  roots: ["<rootDir>", "<rootDir>/src/", "<rootDir>/test/"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  modulePaths: ["<rootDir>/src/"],
  coveragePathIgnorePatterns: ["<rootDir>/test/"]
};
