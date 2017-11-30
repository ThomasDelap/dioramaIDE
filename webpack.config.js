const path = require('path');

module.exports = {
    entry: './src/index.js',

    devServer: {
        contentBase: "./dist",
        hot: true
    },

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}
