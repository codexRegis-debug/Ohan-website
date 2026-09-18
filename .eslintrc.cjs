module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "react/react-in-jsx-scope": "off"
  }
}
