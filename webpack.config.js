module.exports = {
  entry: './src/js/main.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }
    ]
  }
}
