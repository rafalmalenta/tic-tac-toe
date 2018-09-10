var debug = process.env.NODE_ENV !== "production";
var path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "build"),
  //context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "../src/scripts.js",
  plugins:  [
    new MiniCssExtractPlugin({filename: "style.min.css", })
      ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },    
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.sass$/,
        use: [
         MiniCssExtractPlugin.loader,
         "css-loader",
         "sass-loader"
        ]
      }  
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: "scripts.min.js",
    publicPath: '/',
     },
  devServer: {
    historyApiFallback:true,
    publicPath: '/',
     
  },
  
};
