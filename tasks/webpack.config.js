const webpack = require('webpack');
const path = require('path');

const config = require('./config');
const mode = require('./lib/mode');

const JS_DEV = path.resolve(config.root.dev, config.js.dev);
const JS_DIST = path.resolve(config.root.dist, config.js.dist);
const publicPath = config.browserSync.proxy.target
  ? config.browserSync.proxy.publicPath
  : path.join('/', config.js.dist);

const webpackConfig = {
  context: JS_DEV,
  entry: {
    app: [
      './main.js',
    ],
  },
  output: {
    path: JS_DIST,
    filename: 'bundle.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              { modules: false },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    modules: [
      JS_DEV,
      'node_modules',
      'bower_components',
    ],
    extensions: config.js.extensions,
  },
  plugins: [],
};

/**
 * Modify webpackConfig depends on mode
 */
if (mode.production) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  );
} else {
  webpackConfig.devtool = 'inline-source-map';
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
