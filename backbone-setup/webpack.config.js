module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.es$/,
                loader: 'babel-loader',
                // query: {
                //     presets: ['es2015']
                // }
            }
        ]
    }
};