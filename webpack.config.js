/* eslint-disable linebreak-style */
const path = require('path');
const webpack = require('webpack');

// to minify your JavaScript.
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// simplifies creation of HTML files to serve your webpack bundles.
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// extracts CSS into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env, argv) => ({
  entry: [
    path.resolve(__dirname, 'src/js/index.js'),
    path.resolve(__dirname, 'src/scss/main.scss'),
    path.resolve(__dirname, 'node_modules/mdbootstrap/scss/mdb-free.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: argv.mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components|vendors)/,
        loader: 'eslint-loader',
        options: {
          // @TODO - make it false to prevent auto-fixing
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|vendors)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          sourceType: 'unambiguous',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: true,
          collapseWhitespace: true,
          attrs: ['img:src', 'source:srcset'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          name: '[name].[ext]',
          useRelativePath: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/pages/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/pages/html.html',
      inject: 'body',
      filename: 'html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/pages/css.html',
      inject: 'body',
      filename: 'css',
    }),
    new HtmlWebPackPlugin({
      template: 'src/pages/js.html',
      inject: 'body',
      filename: 'js',
    }),
    new HtmlWebPackPlugin({
      template: 'src/pages/ts.html',
      inject: 'body',
      filename: 'ts',
    }),
    new HtmlWebPackPlugin({
      template: 'src/pages/react.html',
      inject: 'body',
      filename: 'react',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      Waves: 'node-waves',
      _: 'underscore',
      Promise: 'es6-promise',
    }),
    new MiniCssExtractPlugin({
      filename: argv.mode !== 'production' ? '[name].css' : '[name].[hash].css',
      chunkFilename: argv.mode !== 'production' ? '[id].css' : '[id].[hash].css',
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true,
        },
      },
    }),
    new CopyWebpackPlugin([
      {
        from: '**/*',
        to: 'mdb-addons',
        context: path.resolve(__dirname, 'src', 'vendors', 'mdb', 'mdb-addons'),
      },
    ]),
    new CleanWebpackPlugin(),
    new StylelintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc.json'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  performance: {
    hints: false,
  },
});
