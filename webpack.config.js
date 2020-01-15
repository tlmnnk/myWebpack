//jshint esversion:6

const path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: './js/app.js',
    about: './js/about.js' 
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  devServer: {
    overlay: true
  }
};