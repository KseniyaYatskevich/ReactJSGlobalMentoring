const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_SERVER_PORT = 3000;

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, '../dist'),
    },    
    devServer: {
        port: DEV_SERVER_PORT,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            },
        ]
    }
}