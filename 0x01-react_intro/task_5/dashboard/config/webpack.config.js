const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './dashboard/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before emit
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // Bypass in development
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dashboard/dist/index.html',
        }),
    ],
};
