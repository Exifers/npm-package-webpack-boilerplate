const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.min.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
};
