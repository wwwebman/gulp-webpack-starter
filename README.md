[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)

__Gulp Webpack Starter__ - really simple and cool toolkit for building static HTML templates using Gulp task runner and Webpack bundler. This is professional Front End workflow, which help you increase your development speed & quality.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)

## Features
|Features|Description|
|------------------|-----------|
|CSS| [SASS](http://sass-lang.com/), [SMACSS](https://smacss.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [clean-css](https://www.npmjs.com/package/gulp-clean-css)|
|JS|[Webpack 2](https://webpack.js.org/), [Babel](http://babeljs.io/)|
|Testing|[Jest](https://facebook.github.io/jest/)|
|Live Reload|[BrowserSync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)|
|HTML| [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)|
|Images| [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)|
|SVG sprite| [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)|
|Deployment| [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp)|


## Usage

Make sure that [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/) installed. Install [yarn](https://yarnpkg.com) > `npm i yarn -g`.
`cd <catalog_you_want>` in your terminal and then:

```bash
git clone https://github.com/wwwebman/gulp-webpack-starter <my-project-name>
cd <my-project-name>
yarn install
yarn dev
```

> Yarn ???
> Yes, I recommend you to use yarn for fast dependencies installs, but `npm install` works just as well.

## All aliases

|`yarn <script>` or `npm run <script>`|Description|
|------------------|-----------|
|`dev`|Serves your App at `localhost:3000`. Run Browser sync and [HMR](https://webpack.github.io/docs/hot-module-replacement.html).|
|`production`|Compiles your App for production.|
|`deploy`|Push production version on remote server.|


## Clean
```bash
rm -rf .git
git init
git commit -m "init" 
```
* Remove [HTML](https://github.com/wwwebman/gulp-webpack-starter/tree/master/dev/html) and start you own project.
* Remove unused [SCSS](https://github.com/wwwebman/gulp-webpack-starter/tree/master/dev/sass/parts) & init [JS](https://github.com/wwwebman/gulp-webpack-starter/tree/master/dev/js/modules)


## Config
Your can make some modification in ./config.json file (e.g. ftp configuration)

---
Author - [webman.pro](http://webman.pro/)