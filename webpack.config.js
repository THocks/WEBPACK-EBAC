const path = require('path')
const htmlWebPack = require('html-webpack-plugin')
const miniCssExtract = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
       rules: [
        {
            test: /\.(sa|c|sc)ss$/,
            use: [
                miniCssExtract.loader,
                'css-loader',
                'sass-loader',
            ]
        },{

            test: /\.css$/i,
            use: [
               'style-loader',
               'css-loader'
            ]
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }

            
        },

        {
            test:/\.(jpeg|jpg|png|svg|gif|webp)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        }

    ]

    },
    plugins: [
        new htmlWebPack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new miniCssExtract({
            filename: 'style.css'
        })
    ]
        
    
}