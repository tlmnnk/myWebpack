//jshint esversion:6

const path = require('path');

module.exports = {
  entry: './app.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
};