const webpack = require('webpack');
const path = require('path');

const config = require('./config');

const JS_DEV = path.resolve(config.root.dev, config.js.dev);
const JS_DIST = path.resolve(config.root.dist, config.js.dist);

const webpackConfig = {
  mode: config.production ? 'production' : 'development',
  optimization: {
    minimize: config.production
  },
  context: JS_DEV,
  entry: {
    app: [
      './index.js',
    ],
  },
  output: {
    path: JS_DIST,
    filename: 'main.js',
    publicPath: config.production ? '' : config.browserSync.proxy.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  resolve: {
    modules: [
      JS_DEV,
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [],
};

/** Modifies webpackConfig depends on mode. */
if (config.production) {
  webpackConfig.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
  );
} else {
  webpackConfig.devtool = 'inline-source-map';
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
