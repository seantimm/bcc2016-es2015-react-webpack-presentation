const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    '1-JSX': './1-JSX/example',
    '2-Simple': './2-Simple/simple.js',
    '3-ThirdParty': './3-ThirdParty/thirdparty.js',
    '4-Reusing': './4-Reusing/reusing.js'
  },
  output: {
    path: path.join(__dirname, '../../dist/React/dist'),
    filename: '[name].bundle.js',
    pathinfo: true
  },
  resolve: {
    root: [ __dirname ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({filename: '1-JSX.html', chunks: ['1-JSX']}),
    new HtmlWebpackPlugin({filename: '2-Simple.html', chunks: ['2-Simple']}),
    new HtmlWebpackPlugin({filename: '3-ThirdParty.html', chunks: ['3-ThirdParty']}),
    new HtmlWebpackPlugin({filename: '4-Reusing.html', chunks: ['4-Reusing']}),
  ]
}