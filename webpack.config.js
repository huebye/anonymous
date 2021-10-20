const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './src/index.js'
  ],
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'index.bundle.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: false,
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
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: "./src/components/assets/favicon.ico"
 })]
}