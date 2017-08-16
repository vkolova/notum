const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg)/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2500,
							minetype: 'image/png',
							outputPath: 'public/dist/'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	plugins: [
    	new ExtractTextPlugin('styles.css'),
        // new HtmlWebpackPlugin({
        //     template: './public/index.html',
        //     filename: 'index.html'
        // }),
		// new webpack.HotModuleReplacementPlugin()
	],
}
