const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: {
    client: path.resolve( __dirname, './src/apps/client/index.js'),
    admin: path.resolve( __dirname, './src/apps/admin/index.js'), 
    provider: path.resolve( __dirname, './src/apps/provider/index.js'), 
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'static/js/[name].bundle.js',
    publicPath: '/',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    open:true,
    port: 3000,
    disableHostCheck: true,
    useLocalIp: true,
    inline: true,
    host: "0.0.0.0",
    historyApiFallback:{
      disableDotRule: false,
      rewrites: [
        { from: "^/provider", to: '/provider' },
        { from: "^/admin", to: '/admin' },
        { from: "^/", to :"/client"}, 
      ]
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
   
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './client/index.html',
      chunks: ['client'],
    
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './admin/index.html',
      chunks: ['admin'],

    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './provider/index.html',
      chunks: ['provider'],

    }),
 
  ],

};


       /*  { from: /^\/$/, to :"/client"},
        { from: /^\/outro\/.*$/, to: '/admin' },
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' }, */