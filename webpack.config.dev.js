const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:
        path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|pdf)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        open: true,
        port: 3000
    },
};