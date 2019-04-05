const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkHash:5].js',
        chunkFilename: '[name]-[chunkHash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.json'],
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[chunkHash:5].css",
            chunkFilename: "[name]-[chunkHash:5].css"
        })
    ]
};