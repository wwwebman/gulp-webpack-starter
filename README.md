# Gulp Webpack Starter :octopus:
[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)
[![Gitter](https://img.shields.io/gitter/room/tj/git-extras.svg?style=flat-square)](https://gitter.im/gulp-webpack-starter/Lobby)
[![devDependency Status](https://img.shields.io/david/dev/roots/sage.svg?style=flat-square)](https://david-dm.org/wwwebman/gulp-webpack-starter#info=devDependencies)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#contributing)

**Gulp Webpack Starter** - really simple and cool toolkit for building static HTML templates using Gulp task runner and Webpack bundler. This is professional Front End workflow, which help you to increase your development speed & quality. Also you can use our starter with [Wordpress](#wordpress) or any other similar environment.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)

## List of Content
1. [Features](#gift-features)
1. [Getting Started?](#getting-started)
    * [Recommendations](#closed_book-recommendations)
    * [Static templating](#dart-static-templating)
    * [Wordpress](#eyes-wordpress)
1. [Configuration](#configuration)
1. [Changelog](https://github.com/wwwebman/gulp-webpack-starter/blob/master/CHANGELOG.md)
1. [Contributing](#contributing)
    * [To open an issue](https://github.com/wwwebman/gulp-webpack-starter/issues)

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
Make sure you have installed: 
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/) installed or [yarn](https://yarnpkg.com/en/)
  
**Recommended to use > node 8.9.1 (last TLS version)**
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
install Wordpress on you localhost (MAMP, LAMP)
#### Step 2  - create theme
Go to exists theme folder or create your custom theme 'customTheme'.
```bash
  cd project/wp-content/themes/customTheme/
```
#### Step 3  - clone starter
```bash
git clone https://github.com/wwwebman/gulp-webpack-starter frontEnd
cd frontEnd
```
#### Step 4  - change config
Below an example of properties you need to be changed in **tasks/config.json***.
1. Change the global assets output:
```json 
"dist": "../" 
```
2. Stop run html task because we don't need it in Wordpress case:
```json
"html": {
  "run": false
},
```
3. Now browserSync should use proxy instead of create static server:
  * `target` should reffer to your wordpress aplication
  * `publicPath` should refer to the folder which you putted bundle.js file. The Reason - issue [GWS - 3](https://github.com/wwwebman/gulp-webpack-starter/issues/3)
```json
 "proxy": {
    "target": "localhost/project",
    "publicPath" : "http://localhost:3333/project/wp-content/themes/assets/js",
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

### Contributing
Contributions, questions and comments, pull requests are all welcome.  
Let's create something cool together :raised_hand:

---
Author - [webman.pro](http://webman.pro/)
