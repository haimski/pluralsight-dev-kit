import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map', // handles minfied and compiled 
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname,'src/vendor'),
        main: path.resolve(__dirname,'src/script')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),

        // Hash the files MD5 so that their names change whne the content changes.
        new WebpackMd5Hash(),

        // Use CommonsChunkPlugin to create a seperate bundle
        // of vendor libraries that they're cached seperately
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Create HTML file thatinclude refference to the bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJSTocken: '4ebc87b215124bb8a7eaa65b2931136c'
        }),

        // Elimintaes duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
}