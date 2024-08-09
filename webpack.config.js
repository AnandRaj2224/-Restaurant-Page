const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const path = require('path');

module.exports = {
  mode : 'production',
  entry :path.resolve(__dirname,'src/index.js'),
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname,'dist'),
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ["style-loader","css-loader"],
      },
      {
        test : /\.(jpeg|svg|jpg|png)$/i,
        type : 'asset/resource',
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : ' Restaurant Page',
      filename : 'index.html',
      template : 'src/template.html',
    })
  ]
}