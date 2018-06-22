const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    index: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      css: require('path').resolve(__dirname, '../client/assets/css')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        loader: 'eslint-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.less?$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf|otf)$/,
        loader: 'url-loader?limit=2048'
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

if (isDev) {
  config.entry = {
    index: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: '/public/index.html'
    },
    publicPath: '/public'
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin()) // 添加hot-module-replacement插件，需要引入webpack
}

module.exports = config
