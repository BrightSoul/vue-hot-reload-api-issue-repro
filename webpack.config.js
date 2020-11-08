const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, './dist'),
    compress: false,
    port: 3000
  },
  entry: {
    index: path.resolve(__dirname, './index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, './index.html'),
        to: path.resolve(__dirname, './dist/index.html'),
        toType: 'file'
      }]
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.d.ts']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: require('./babel.config.js')
        }
      }
    ]
  }
};
