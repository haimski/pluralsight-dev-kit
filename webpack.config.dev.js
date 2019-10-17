import path from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname,'src/script')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
         // Create HTML file thatinclude refference to the bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}