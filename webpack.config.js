var path = require("path");
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: "./bundle/entry.jsx",
  output: {
    path: "./",
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    root: path.resolve('./bundle'),
    extensions: ["", ".js", ".jsx" ]
  }
};