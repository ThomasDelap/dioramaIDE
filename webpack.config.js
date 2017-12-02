const path = require('path');

module.exports = {

    entry: './src/index.js',
    watch: true,
    target: 'electron',

    devServer: {
        contentBase: "./dist",
        hot: true
    },

    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        ]
    }
}
