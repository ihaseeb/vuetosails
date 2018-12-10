const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  entry: {
    entry: './client/main.js'
  },
  output: {
    path: __dirname + '/dist/public',
    filename: 'bundle.js'
  },
  module: {

    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'jsx-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },

      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'core')]
  }
};
