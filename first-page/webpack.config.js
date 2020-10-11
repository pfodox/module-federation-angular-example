var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: "http://localhost:8081/",
  },

  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    port: 8081,
    historyApiFallback: true
  },
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "firstPage",
      library: {type: "var", name: 'firstPage'},
      filename: "remoteEntry.js",
      exposes: {
        "./module": "./src/app/first-page/first-page.module.ts",
      },
      shared: [
        "@angular/core",
        "@angular/common",
        "@angular/router",
      ],
    }),
  ],
};
