const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
};