const mode = process.env.NODE_ENV;// || "development";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const entry = {
  "index": ["./src/index.js","./src/index.scss"]
}

const _module = {
  rules: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }
  ]
}

const optimizaton = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }

const output = {
  filename: "js/[name].webpack.js",
  path: __dirname
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: "css/[name].webpack.css"
  })
]

module.exports = {
  entry,
  mode,
  module: _module,
  output,
  plugins
};
