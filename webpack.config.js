const path = require('path');

module.exports = {
    devServer: {
        contentBase: "./src",
        inline: true,
        historyApiFallback: true
    },

    entry: './src/index.js',
    target: 'electron-main',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }]
    },

    node: {
        fs: 'empty'
    }
}
