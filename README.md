<h1 align="center">Welcome to modern publisher 👋</h1>
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fcab8PZ%2FbtqwsdPfkGb%2FQJaKFbE8KlCxiSi4Vl7070%2Fimg.jpg"/>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/imsourceboom/modern-pubilsher/blob/master/README.md">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
</p>

> 퍼블리셔를 위한 자동 빌드 툴

> Gulp4 + Webpack + babel 를 기반으로 pug, sass, es2015+ 를 사용하여 전통적인 정적 페이지 html5, css3, javscript 를 손쉽고 편하게 빌드하기 위한 자동화 도구입니다.

## Clone

```sh
git clone https://github.com/imsourceboom/modern-pubilsher.git [project folder name]
```

## Install

```sh
yarn install
# or
npm install
```

dependencies package들은 example page를 위한 package들이니
사용여부에 따라 삭제하세요.

## Usage

```sh
yarn start
# and
npm start
```

기본 포트는 4000 이며 포트 변경을 원하시면 gulp/browserSync.js 에서 변경하세요.

## Description

-   pug

    -   entry: **src/pug/index.pug** AND **src/pug/pages/**
    -   output: **build/index.html** AND **build/html/**

-   sass

    -   entry: **src/sass/main.scss**
    -   output: **build/css/main.css**

-   script

    -   entry: **src/script/index.js**
    -   output: **build/js/app.js**

-   _image나 여타 resource들은 build/assets/ 에 두세요._

-   _css 파일은 sass 설정으로 autoprefixer + compressed 가 적용되어 빌드됩니다._
-   _js 파일은 webpack의 production mode 로 압축되어 빌드됩니다._

## Author

👤 **imsourceboom (ecmascript.developer@gmail.com)**

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
