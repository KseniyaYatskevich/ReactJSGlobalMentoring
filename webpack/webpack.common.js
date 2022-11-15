const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DEV_SERVER_PORT = 3000;

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: DEV_SERVER_PORT,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: 'src', to: 'dist' }]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    }
};
