const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: {
      import: path.join(__dirname, 'src', 'index.jsx'),
      filename: path.join('private', 'app.bundle.js'),
    },
    auth: {
      import: path.join(__dirname, 'src', 'auth.jsx'),
      filename: path.join('public', 'auth.bundle.js'),
    },
  },
  output: {
    // path: path.join(__dirname, 'dist'),
    // filename: '[name].bundle.js',
    clean: true,
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'private/app.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'public/auth.html',
      chunks: ['auth'],
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
    // static: [
    //   { directory: path.join(__dirname, 'dist') },
    //   { directory: path.join(__dirname, 'src', 'client', 'public') },
    // ],
    static: false,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
