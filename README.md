# npm-package-webpack-boilerplate 

A ready-to-use project for publishing browser npm packages with:
- Webpack
- Babel
- Jest
- Eslint

Features:
- Deadly simple

## Usage

In order to use this boilerplate, just follow the commands and instructions below:
```shell
# clone this repository
git clone https://github.com/Exifers/npm-package-webpack-boilerplate my-awesome-package

# remove the git history
rm -rf .git

# edit the following fields in `package.json`
# - name
# - description
# - url
# - author

# edit README.md
echo "my awesome package" > README.md
```

And you're good to go !
You can start coding your library at ```src/index.js```.

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
