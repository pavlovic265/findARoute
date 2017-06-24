module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundel.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.js', '.html', '.css']
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /(node_modules)/ },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.js$/, loader: 'strict-loader', exclude: /(node_modules)/ },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
}