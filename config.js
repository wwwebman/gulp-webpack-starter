const path = require('path');

const { env } = process;

module.exports = {
  production: env.NODE_ENV === 'production',
  cleanFilesOutsideWorkingDir: env.CLEAN_FILES_OUTSIDE_WORKING_DIR === 'true',
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
    extensions: env.CSS_EXTENTIONS,
    purge: env.CSS_PURGE === 'true',
    purgeWhitelist: env.CSS_PURGE_WHITELIST ? env.CSS_PURGE_WHITELIST.split(',') : [],
    purgeContent: env.CSS_PURGE_CONTENT ? env.CSS_PURGE_CONTENT.split(',') : [],
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
  sprite: {
    dev: env.SVG_SPRITE_DEV,
    dist: env.SVG_SPRITE_DIST,
  },
  fonts: {
    dev: env.FONTS_DEV,
    dist: env.FONTS_DIST,
    extensions: env.FONTS_EXTENTIONS,
  },
  static: {
    dev: env.STATIC_DEV,
    dist: env.STATIC_DIST,
  },
  browserSync: {
    port: Number(env.BROWSER_SYNC_PORT),
    proxy: {
      target: env.BROWSER_SYNC_TARGET,
      publicPath: env.BROWSER_SYNC_PUBLIC_PATH || path.join('/', env.JS_DIST),
      files: [
        path.join(env.ROOT_DIST, env.BROWSER_SYNC_FILES)
      ],
    },
  },
};
