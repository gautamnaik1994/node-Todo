var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['script!angular/angular.min.js', 'script!angular-animate/angular-animate.min.js', 'script!angular-aria/angular-aria.min.js',
        'script!angular-material/angular-material.min.js','./app/app.js'
    ],
    plugins: [
         new ExtractTextPlugin("./../css/style.css")
    ],
    output: {
        path: 'public/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')//('style-loader', ['css-loader','postcss-loader','sass-loader'])
        }]

    },
    postcss: [autoprefixer({
        broser: ['last 2 versions']
    })],
    sassLoader: {
        outputStyle: "expanded"
        
    },
    devtool: 'eval-source-map'

};