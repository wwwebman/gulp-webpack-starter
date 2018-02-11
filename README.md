# Gulp Webpack Starter :octopus:
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![GitHub contributors](https://img.shields.io/github/contributors/wwwebman/gulp-webpack-starter.svg)](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CONTRIBUTING.md)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)
[![Gitter](https://img.shields.io/gitter/room/tj/git-extras.svg?style=flat-square)](https://gitter.im/gulp-webpack-starter/Lobby)

**Gulp Webpack Starter** - A simple web-development toolkit using Gulp task runner and Webpack bundler. Ideal for building static HTML templates, speeding up [Wordpress](#wordpress) theme development, or any similar template-driven and front-end project.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)

## List of Content
1. [Features](#gift-features)
1. [Getting Started?](#getting-started)
    * [Recommendations](#closed_book-recommendations)
    * [Static templating](#dart-static-templating)
    * [Wordpress](#eyes-wordpress)
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
  
**Recommended to use node 8.9.* ([last LTS version](https://github.com/nodejs/Release#release-schedule))**
### :dart: Static templating
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
Easy, right?

### :eyes: Wordpress
#### Step 1 - install Wordpress
Install Wordpress on you localhost (MAMP, LAMP)
#### Step 2  - create theme
`cd` into your theme directory. E.g.:
```bash
  cd project/wp-content/themes/customTheme/
```
#### Step 3  - clone starter
```bash
git clone https://github.com/wwwebman/gulp-webpack-starter frontEnd
cd frontEnd
```
#### Step 4  - change config
Certain defaults will need to be changed in **tasks/config.json*** for WP development.
1. Change the global assets output, since we want to export assets to the theme root directory:
```json 
"dist": "../" 
```
2. Disable the `html` `run` task, since we don’t need to compile HTML in this project:
```json
"html": {
  "run": false
},
```
3. Now, browserSync should use proxy instead of creating a static server:
  * `target` should refer to the location (`pwd`) of your local WordPress installation
  * `publicPath` should refer to the folder to which you’re outputting the `bundle.js` file. The Reason - issue [GWS - 3](https://github.com/wwwebman/gulp-webpack-starter/issues/3)
```json
 "proxy": {
    "target": "localhost/project",
    "publicPath" : "http://localhost:3333/project/wp-content/themes/customTheme/dist/assets/js",
  }
```
#### Step 5 - run
```bash
yarn
yarn start
```

## Commands
```bash
yarn <script> //alternative: npm run <script>
yarn start //Run development mode
yarn build //Compiles your App for production
yarn deploy //Push production version on remote server using FTP
```
