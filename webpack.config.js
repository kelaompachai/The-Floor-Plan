const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
    static: [
      { directory: path.join(__dirname, 'dist') },
      { directory: path.join(__dirname, 'src', 'client', 'public') },
    ],
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
};
