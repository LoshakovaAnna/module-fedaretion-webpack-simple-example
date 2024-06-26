# module-federation-webpack-simple-example

Simple example of using Module Federation
[Module Federation webpack](https://webpack.js.org/concepts/module-federation/)

[video](https://www.youtube.com/watch?v=ag9xOngu1fs&ab_channel=%D0%A7%D0%B5%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D0%B2%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD.FrontendBlog)

webpack.config.ts - remote
``` bash


const HtmlWebPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8001
    },
    plugins: [
        new HtmlWebPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './App1Init': './src/bootstrap' //<--  что экспортируем
            }
        })
    ]
}
```

webpack.config.ts - host
` remoteApp1: "app1@http://localhost:8001/remoteEntry.js"`
remoteApp1 - name will be used in host js-files (title of remote project - any)
app1 - name is used in webpack.config.ts in REMOTE project
http://localhost:8001/ - url remote proj
remoteEntry.js - filename of exported file in ModuleFederationPlugin of remote proj



``` bash

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
```

in host js file :
 use ModuleFederationPlugin/remotes/name +`exposes` name to refer remote file

example
`import init from "remoteApp1/App1Init";`