const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config({ 
    path: path.resolve(__dirname, 'api.env') 
}).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html',
            }),
            new webpack.DefinePlugin(envKeys),
        ],
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
             {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
}