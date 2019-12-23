<img src="images/descartia_logo_mini.png" width="300" alt="descartia.js">

## Overview
descartia.js is a simple and fast JavaScript module which enables smooth inertial scroll compatible with flick scrolling of mobile devices.  
descartia.js（デカルティア.js）はスマホやタブレットなどの慣性スクロールとほぼ同等のスムーズスクロールをすべてのデバイスで実現する軽量で高速なJavaScriptモジュールです。
## Feature
1. descartia.js calculates scroll position based on physical attenuation
2. descartia.js uses requestAnimationFrame() method to render scroll animation.
3. descartia.js does not break browsers' default scroll functions.  
( You can use scrollTo(), scrollBy(), browsers' scroll bars, etc. )
4. descartia.js can detect window width, and change its behavior. So you can use it in a responsive layout.
5. descartia.js stops working automatically on mobile touchscreen devices to prevent conflict with native scroll.
6. descartia.js stops working automatically on Mac laptops to prevent conflict with native inertial scroll of the trackpad. (Experimental)


## How to use
#### 1. Load Essential Files
Load `descartia.js` and `common.css` in your html.  
htmlに`descartia.js`と`common.css`を読み込む
```html
<script src="descartia.js"></script>
```  
```html
<link rel="stylesheet" type="text/css" href="common.css">
```
#### 2. Write HTML in the proper style
```html
<body>

  <div class="l-page">
    <div class="l-table">

      Page Contents.

    </div>
  </div>

  <div class="dummy-scroll">
  </div>

</body>
```  



## Methods
To start descartia.js
```js
Descartia.start();
```
To disable smooth scroll and enable default scroll  
```js
Descartia.disable();
```  
To pause smooth scroll and other descartia.js events  
```js
Descartia.pause();
```
## Options
