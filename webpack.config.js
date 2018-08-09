// import htmlWebpackPlugin from 'html-webpack-plugin'
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const path = require('path')
module.exports =  {
    context: __dirname,
    mode: 'development',
    entry:'./src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist/')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(mp3)$/,
                loader: 'url-loader',
                options: {
                  name:'audios/[name].[ext]',
                  limit:10
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'url-loader',
                options: {
                  name:'img/[name].[ext]',
                  limit:10
                }
            }  
        ]
    },
    devServer: {
        port: 8080,
        hot: true,
        contentBase: path.resolve(__dirname, './dist/')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html'
        }),
        new copyWebpackPlugin([
            {
                from: './src/assets',
                to: './assets'
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ]
}