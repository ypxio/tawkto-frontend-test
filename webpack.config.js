'use strict'

const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const dataObj = require("./data/data.json");

module.exports = {
	entry: [
		'./src/app.js'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'bundle.js'
  },
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env', {
									targets: "ie 9"
								}
							]
						]
					}
				}
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
					},
				},
		  }
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			fonts : path.resolve(__dirname, 'src/assets/fonts')
		}
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'public'),
		port: 9000,
		before: function(app, server, compiler) {
			app.get('/api/categories', function (req, res) {
				res.json(dataObj.categories);
			});

			app.get('/api/category/:id', function (req, res) {
				const categoryId = req.params.id
				res.json(dataObj.categories.find(category => category.id === categoryId));
			});

			app.get('/api/articles', function (req, res) {
				res.json(dataObj.articles);
			});

			app.get('/api/author/:id', function (req, res) {
				const authorId = req.params.id;
				res.json(dataObj.authors.find(author => author.id === authorId));
			});

			app.get('/api/search/*', function (req, res) {
				res.json(dataObj.articles);
			});
		}
	}
}