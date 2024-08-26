const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'), // Entry point is in the src folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Output goes to the dist folder
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    hot: true, // Enable hot reloading
    compress: true,
    port: 9000, // You can change the port if needed
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // For handling CSS files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource', // For handling image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'), // Template for the HTML file
    }),
  ],
  devtool: 'inline-source-map', // For inline source maps
};
