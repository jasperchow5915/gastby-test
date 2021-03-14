module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  transform: {
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/tests/__mocks__/file-mocks.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}