const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.js'
	},
  plugins: [
    	new ExtractTextPlugin('styles.css'),
			new HtmlWebpackPlugin({
				template: './public/index.html',
				filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff2?|eot)(\?.+)?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~~': path.resolve(__dirname, 'src')
    }
  },
  node: {
    fs: 'empty',
    __filename: true,
    __dirname: true
  },
  target: 'node',
  externals: [nodeExternals()]
}
