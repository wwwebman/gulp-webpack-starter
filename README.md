[![Build Status](https://travis-ci.org/wwwebman/gulp-webpack-starter.svg?branch=master)](https://travis-ci.org/wwwebman/gulp-webpack-starter)
__Gulp Webpack Starter__ - really simple and cool toolkit for building static HTML templates using Gulp task runner and Webpack bundler. This is professional Front End workflow, which help you increase your development speed & quality.

![Gulp Webpack Starter](http://webman.pro/assets/img/main/gulp-webpack-starter-webman.jpg)




## Usage

> Make sure Node & npm installed.
> Using terminal/console cd to catalog you want and do this:

I recommend you to use [yarn](https://yarnpkg.com) for deterministic installs, but `npm install` works just as well.

```bash
git clone https://github.com/wwwebman/gulp-webpack-starter <my-project-name>
cd <my-project-name>
yarn install
yarn dev
```

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