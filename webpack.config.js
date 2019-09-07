const webpack = require('webpack')
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let env = process.env.WEBPACK_ENV;
let fileName = 'app.js';

if (env === 'production') {
	let UglifyPlugin = webpack.optimize.UglifyJsPlugin;

	plugins.push(new UglifyPlugin({minimize: true}));

	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}));

	fileName = fileName.replace(/js/g, 'min.js');
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: fileName
  },
  node: {
   readline: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:[
          {
            loader: "babel-loader",
            options: {
              presets: ['env']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
			{
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: "./src/index.html",
    }),
    new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: "errors-only",
    open: true
  }
};
