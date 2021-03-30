const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  assets: 'assets/'
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: ['babel-polyfill', PATHS.src]
  },
  output: {
    filename: `bundle.js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|gif|svg|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      '@': `${PATHS.src}/js`
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: `style.css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/${PATHS.assets}img`,
          to: `${PATHS.assets}img`
        }
      ]
    })
  ]
};
