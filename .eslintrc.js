module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "supertest": true,
        "expect": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};