module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "prettier", "airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-lint": 0,
        "linebreak-style": 0,
        "react/prefer-stateless-function": 0,
        "object-curly-newline": 0,
        "import/no-unresolved": 0
    }
};