const path = require('path');

require('dotenv').config();

const { env } = process;

module.exports = {
  production: env.NODE_ENV === 'production',
  root: {
    dev: env.ROOT_DEV,
    dist: env.ROOT_DIST,
  },
  html: {
    dev: env.HTML_DEV,
    dist: env.HTML_DIST,
    parts: env.HTML_PARTS,
    run: env.HTML_RUN === 'true',
  },
  css: {
    dev: env.CSS_DEV,
    dist: env.CSS_DIST,
    parts: env.CSS_PARTS,
    extensions: env.CSS_EXTENTIONS,
    uncss: env.UNCSS_RUN === 'true',
  },
  js: {
    dev: env.JS_DEV,
    dist: env.JS_DIST,
  },
  images: {
    dev: env.IMAGES_DEV,
    dist: env.IMAGES_DIST,
    extensions: env.IMAGES_EXTENTIONS,
  },
  svg: {
    dev: env.SVG_DEV,
    dist: env.SVG_DIST,
  },
  fonts: {
    dev: env.FONTS_DEV,
    dist: env.FONTS_DIST,
    extensions: env.FONTS_EXTENTIONS,
  },
  static: {
    dev: env.STATIC_DEV,
    dist:  env.STATIC_DIST,
  },
  deploy: {
    hostname: env.DEPLOY_HOSTNAME,
    username: env.DEPLOY_USERNAME,
    path: env.DEPLOY_PATH,
    password: env.DEPLOY_PASSWORD,
  },
  browserSync: {
    port: Number(env.BROWSER_SYNC_PORT),
    proxy: {
      target: env.BROWSER_SYNC_TARGET,
      publicPath: env.BROWSER_SYNC_PUBLIC_PATH || path.join('/', env.JS_DIST),
      files: [
        env.BROWSER_SYNC_FILES,
      ],
    },
  },
};
