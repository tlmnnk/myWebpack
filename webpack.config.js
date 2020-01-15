//jshint esversion:6

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: './js/app.js',
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Output Management',
         }),
       ],
  devServer: {
    overlay: true
  }
};