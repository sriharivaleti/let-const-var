module.exports = {
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg)$/,
                use: [{loader: 'babel-loader'}, {loader: 'file-loader'}],
            },
        ],
    },
}