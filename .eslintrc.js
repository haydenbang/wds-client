module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["react-app", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-lint": 0,
    "react/no-array-index-key": 0,
    "linebreak-style": 0,
    "react/prefer-stateless-function": 0,
    "object-curly-newline": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0
    // "jsx-a11y/label-has-associated-control": [
    //   2,
    //   {
    //     labelComponents: ["CustomInputLabel"],
    //     labelAttributes: ["label"],
    //     controlComponents: ["CustomInput"],
    //     depth: 3
    //   }
    // ]
  }
};
