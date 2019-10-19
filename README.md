# npm-package-webpack-boilerplate 

A ready-to-use project for publishing browser npm packages with:
- Webpack
- Babel
- Jest
- Eslint

Features:
- Deadly simple

## Usage

- clone this project from [Github](https://github.com/Exifers/npm-package-webpack-boilerplate)
```shell
git clone https://github.com/Exifers/npm-package-webpack-boilerplate my-awesome-package

rm -rf .git

# edit the following fields in `package.json`
# - name
# - description
# - url
# - author

echo "my awesome package" > README.md
```

And you're good to go !

## Commands

This boilerplate comes with the following commands:

```shell
yarn build  # bundle your project into dist/main.min.js

yarn test  # runs the tests

yarn lint  # runs eslint
```

## Publishing

```shell
yarn login

yarn publish
```
