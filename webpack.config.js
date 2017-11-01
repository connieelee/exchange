const webpack = require('webpack'); // eslint-disable-line

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
