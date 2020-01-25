# Gulp Webpack Starter :octopus:

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![GitHub contributors](https://img.shields.io/github/contributors/wwwebman/gulp-webpack-starter.svg)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)
[![Gitter](https://img.shields.io/gitter/room/tj/git-extras.svg?style=flat-square)](https://gitter.im/gulp-webpack-starter/Lobby)

**Gulp Webpack Starter** - A simple web-development toolkit using Gulp task runner and Webpack bundler.
Ideal for [building static HTML templates](#dart-1-static-html-templating) 
or [speeding up Wordpress](#eyes-2-wordpress) theme development 
and any similar template-driven and front-end project.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)

## List of Content

1. [Features](#gift-features)
1. [Getting Started?](#getting-started)
    * [Recommendations](#closed_book-recommendations)
    * [Static HTML templating](#dart-1-static-html-templating)
    * [Wordpress](#eyes-2-wordpress)
1. [Configuration](#configuration)
1. [Changelog](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CHANGELOG.md)
1. [Contributing](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)

## :gift: Features

|Features|Description|
|------------------|-----------|
|CSS| [SASS](http://sass-lang.com/), [SMACSS](https://smacss.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [clean-css](https://www.npmjs.com/package/gulp-clean-css)|
|JS|[Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/)|
|Testing|[Jest](https://facebook.github.io/jest/)|
|Live Reload|[BrowserSync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)|
|HTML| [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)|
|Images| [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)|
|SVG sprite| [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)|
|Deployment| [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp)|

## Getting started?

### :closed_book: Recommendations

Make sure you have the following installed: 
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/)
  
**Recommended to use Node.js >= v10.16.0**.

## :dart: 1. Static HTML templating

#### Step 1 - clone

```bash
git clone https://github.com/wwwebman/gulp-webpack-starter <my-project-name>
cd <my-project-name>
```

#### Step 2 - run

```bash
yarn
yarn start
```

**Pretty easy, right?**

***

## :eyes: 2. Wordpress

#### Step 1 - Install Wordpress

Install Wordpress on you localhost (MAMP, LAMP)

#### Step 2  - Create Wordpress Theme

`cd` into your theme directory. E.g.:

```bash
  cd project/wp-content/themes/[your_theme_folder]
```

#### Step 3 - Clone starter

```bash
git clone https://github.com/wwwebman/gulp-webpack-starter [your_frontend_folder_name]
cd [your_frontend_folder_name]
```

#### Step 4 - Change config

Edit `./tasks/config.json` file with following instruction:

1. Change the global assets output:

```json
{
  "root": {
    "dist": ".." 
  }
}
```

Starting from now all compiled files will land to `themes/[your_theme_folder_folder]/assets`.

2. Disable the `html` `run` task, since we don’t need to compile HTML in Wordpress:

```json
{
    "html": {
      "run": false
    }
}
```

3. Now, browserSync should use proxy instead of creating a static server:

  * `target` should refer to the location (`pwd`) of your local WordPress installation
  * `publicPath` should refer to the folder to which you’re outputting the `bundle.js` file. 
  The Reason - issue [GWS - 3](https://github.com/wwwebman/gulp-webpack-starter/issues/3).
  
```json
{
  "proxy": {
    "target": "http://localhost/[your_project]",
    "publicPath" : "http://localhost:3333/[your_project]/wp-content/themes/[your_theme_folder]/assets/js/"
  }
}
```

#### Step 5 - run

```bash
yarn
yarn start
```

**This is cool, isn't it?**

If you still have a problem, let us know by opening an [issue](https://github.com/wwwebman/gulp-webpack-starter/issues).

## Commands

```bash
yarn <script> // alternative: npm run <script>

yarn start // Run development mode
yarn build // Compiles your App for production
```

### Bonus

You can add credentials in `./tasks/config.json` and deploy project using FTP server.
 
 ```json
{
  "deploy": {
    "hostname": "",
    "username": "",
    "path": "/",
    "password": ""
  }
}
```

Then use the following command:

```bash
yarn deploy 
```


