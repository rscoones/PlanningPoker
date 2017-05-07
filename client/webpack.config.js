const path = require('path');

const src = path.join(__dirname, "src");

module.exports = {
  entry: path.join(src, 'index.jsx'),
  output: {
    path: path.join(__dirname, "../server/public/assets/"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include: src,
        loader : 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "app": src
    }
  }
}
