const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Rule for CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Rule for images (png, jpeg, gif)
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/', // Output path for images
                        },
                    },
                ],
            },
            // Rule for PDF files
            {
                test: /\.(pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'pdf/', // Output path for PDF files
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        // Copy the CNAME file to the dist/ folder
        new CopyWebpackPlugin({
            patterns: [
                { from: 'CNAME', to: '' }, // The CNAME file is placed in the root of dist/
            ],
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // Ensures everything goes to the dist folder
        publicPath: '/',
    },
};
