module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "no-unused-expressions": ["error", {"allowTernary": true}],
    }
};
