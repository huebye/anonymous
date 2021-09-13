const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3010,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader', 
                ]
            },
            {
                test: /\.svg$/, type: "asset",
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  }
                ]
            },
            {
                test: /\.svg$/, type: "asset",
                use: ['@svgr/webpack'],
              },
              {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
              },
              {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
              }
        ]
    },
    resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss','.png'],
  }
}