const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => {

    const { mode='development' } = env 

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'My Build Sandbox',
                buildTime: new Date().toString(),
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            })
        ]

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css'
                })
            )
        }

        return plugins
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',

        output:{
            filename: isProd ? 'main=[hash:8].js' : undefined //будет название по умолчанию
        },

        module: {
            rules: [
                //
                // JS config
                //
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                //
                // Loading Images
                //
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }  
                        }
                    ]
                },
                //
                // Loading Fonts
                //
                {
                    test: /\.(ttf|otf|eot|woof|woof2)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }  
                        }
                    ]
                },
                //
                // Loading CSS
                //
                {
                    test: /\.(css)/,
                    use: getStyleLoaders() // Порядок имеет значение
                },
                //
                // Loading SASS/SCSS
                //
                {
                    test: /\.(s[ca]ss)/,
                    use: [ 
                        ...getStyleLoaders(), //Порядок имеет значение
                        'css-loader',
                        'sass-loader'
                    ]
                }

            ]
        },
        
        plugins: [
            new HtmlWebpackPlugin({
                title: 'My Build Sandbox',
                buildTime: new Date().toString(),
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            })
        ],

        devServer: {
            open: true
        }
    }
}