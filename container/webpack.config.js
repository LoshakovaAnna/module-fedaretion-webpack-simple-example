const HtmlWebPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8000
    },
    plugins: [
        new HtmlWebPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                remoteApp1: "app1@http://localhost:8001/remoteEntry.js"
            }
        })
    ],

}