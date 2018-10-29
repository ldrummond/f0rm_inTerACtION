const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  plugins: [
  ],
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.s[ac]ss$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  }
};
