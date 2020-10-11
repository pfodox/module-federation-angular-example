var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: "development",
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "app",
      remotes: {
        'first-page': "firstPage@http://localhost:8081/remoteEntry.js",
        'second-page': "secondPage@http://localhost:8082/remoteEntry.js",
      },
      shared: [
        "@angular/core",
        "@angular/common",
        "@angular/router",
      ],
    }),
  ],
};
