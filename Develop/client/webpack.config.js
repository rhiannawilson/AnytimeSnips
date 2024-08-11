const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Progressive Web App',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new WebpackPwaManifest({
        name: 'My Progressive Web App',
        short_name: 'PWA',
        description: 'My awesome Progressive Web App!',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        start_url: './index.html',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};




// HtmlWebpackPlugin: Generates the HTML file and injects the necessary scripts.
// MiniCssExtractPlugin: Extracts CSS into separate files.
// WebpackPwaManifest: Generates a manifest.json file for your PWA.
// InjectManifest (from Workbox): Integrates a custom service worker.
// CSS Loader: Processes CSS files.
// Babel Loader: Transpiles modern JavaScript to ensure compatibility with older browsers.