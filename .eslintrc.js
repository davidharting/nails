module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
  ],
  // Can I get rid of these since I am extending above?
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  rules: {
    // Since we are using types for all props this is redundant
    "react/prop-types": 0,
    // I don't like warnings. Either fail the build or don't.
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 2, // Can't believe this one was set to warning
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
};
