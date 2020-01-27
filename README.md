# Gulp Webpack Starter :octopus:

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![GitHub contributors](https://img.shields.io/github/contributors/wwwebman/gulp-webpack-starter.svg)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)
[![Gitter](https://img.shields.io/gitter/room/tj/git-extras.svg?style=flat-square)](https://gitter.im/gulp-webpack-starter/Lobby)

**Gulp Webpack Starter** - A simple web-development toolkit using Gulp task runner and Webpack bundler.
Ideal for [building static HTML templates](#dart-1-static-html-templating) 
or [speeding up WordPress](#eyes-2-wordpress) theme development 
and any similar template-driven and front-end project.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)

## List of Content

1. [Features](#gift-features)
1. [Getting Started?](#getting-started)
    * [Recommendations](#closed_book-recommendations)
    * [Static HTML templating](#dart-1-static-html-templating)
    * [WordPress](#eyes-2-wordpress)
1. [Configuration](#configuration)
1. [Changelog](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CHANGELOG.md)
1. [Contributing](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)

## :gift: Features

|Features|Description|
|------------------|-----------|
|CSS| [SASS](http://sass-lang.com/), [SMACSS](https://smacss.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)|
|JS|[Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/)|
|Live Reload|[BrowserSync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)|
|HTML| [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)|
|Images| [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)|
|SVG sprite| [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)|
|Deployment| [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp) - @deprecated|

## Getting started?

### :closed_book: Recommendations

Make sure you have the following installed: 
* [Node.js](https://nodejs.org/)(**Recommended to use Node.js >= v10.16.0**)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/). 
In this instruction we use yarn, but you can use npm. 

## :dart: 1. Static HTML templating

#### Step 1 - clone

```bash
git clone https://github.com/wwwebman/gulp-webpack-starter [my-static-template-project-name]
cd [my-static-template-project-name]
```

#### Step 2 - run

`cp .env.dist .env`

```bash
yarn
yarn start
```

Start files modification under `[my-static-template-project-name]/dev/*` to feel a great 
development experience.

**Cool and pretty easy, right?**

***

## :eyes: 2. WordPress

### 1. Preparation

It can be setup in a number of different ways, but we would like to describe the simplest:

Please be sure of the following:
 - WordPress website is available under `http://localhost/[awesome_wp_project]`
 - WordPress Theme exists

Note: folder naming on different OS can differ.

```bash
cd [awesome_wp_project]/wp-content/themes/[theme_folder_name]

git clone git@github.com:wwwebman/gulp-webpack-starter.git [frontend_folder_name]

cd [frontend_folder_name]

cp .env.wordpress .env
```

### 2. Modify .env

##### Required

Set correct values to `BROWSER_SYNC_TARGET` and `BROWSER_SYNC_PUBLIC_PATH` variables.

- `BROWSER_SYNC_TARGET` - refers to WordPress website installed locally
- `BROWSER_SYNC_PUBLIC_PATH` - refers to the relative pathname of `bundle.js` in the browser.

##### Not required

All compiled files land to `themes/[theme_folder_name_folder]/assets`.
Modify `ROOT_DIST` to change the destination.

### 3. Double check if assets attached in `[theme_folder_name]/functions.php`:

```php
function enqueue_styles()
{
  wp_enqueue_style('custom', get_template_directory_uri() . '/assets/css/bundle.css', [], null);
}

add_action('wp_enqueue_scripts', 'enqueue_styles');

function register_scripts()
{
  wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/bundle.js', [], null, true);
}

add_action('wp_enqueue_scripts', 'register_scripts');
```

#### 4. Run

```bash
cd [theme_folder_name]/[frontend_folder_name]
yarn
yarn start
```

**This is cool, isn't it?**

If you still have a problem, let us know by opening an [issue](https://github.com/wwwebman/gulp-webpack-starter/issues).

## Commands

```bash
yarn <script>

yarn start // Runs development mode
yarn build // Compiles assets in production mode
```
