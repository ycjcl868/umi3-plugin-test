module.exports = {
  moduleNameMapper: {
    // 确保 import {} from 'umi' 正常 work
    "^@@/umiExports$": "<rootDir>/src/fixtures/.umi-test/core/umiExports.ts",
    "^@@/core/umiExports$": "<rootDir>/src/fixtures/.umi-test/core/umiExports.ts"
  }
}
