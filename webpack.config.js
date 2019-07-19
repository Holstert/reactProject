const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(svg|jpg|gif)$/,
                use: [
                    {
                        options: {
                            name: '[name].[ext]',
                            outputPath: './dist/'
                        },
                        loader: "file-loader"
                    }
                ]
            },
            { 
                test: /\.(png|jpg|jpeg)$/, 
                loader: 'url-loader?limit=10000' 
            }
        ]
    },
    resolve: {
        extensions: [ "*", ".js", ".jsx" ]
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};