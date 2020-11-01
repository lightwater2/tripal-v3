const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9090,
    inline: true,
    historyApiFallback: true,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  entry: { index: './src/index.tsx' },
  target: 'web',
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            name: './assets/[hash].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
