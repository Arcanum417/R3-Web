var path = require('path')
var webpack = require('webpack')

var assetsSrcDir = path.resolve(__dirname, './resources/assets');

module.exports = {
    entry: path.resolve(assetsSrcDir, 'app.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'stylus': 'vue-style-loader!css-loader!stylus-loader',
                },
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader', {
                    loader: 'stylus-loader'
                },
            ]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
            loader: 'url-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            http: path.resolve(assetsSrcDir, 'http.js'),
            eventBus: path.resolve(assetsSrcDir, 'eventBus.js'),
            styles: path.resolve(assetsSrcDir, 'style'),
            components: path.resolve(assetsSrcDir, 'components'),
            views: path.resolve(assetsSrcDir, 'views')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}