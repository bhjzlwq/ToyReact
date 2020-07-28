const  path = require("path")

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist/')
  },
  module: {
    rules:[{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      // options:[[
      //   "@babel/plugin-"
      // ]]
    }]
  }
}
