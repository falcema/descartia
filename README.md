<img src="images/descartia_logo_mini.png" width="300" alt="descartia.js">

## Overview
descartia.js is a simple and fast JavaScript module which enables smooth inertial scroll compatible with flick scrolling of mobile devices.  
descartia.jsはスマホやタブレットなどの慣性スクロールとほぼ同等のスムーズスクロールをすべてのデバイスで実現する軽量で高速なJavaScriptモジュールです。
## Feature
1. descartia.js calculates scroll position based on physical attenuation
2. descartia.js enables smooth scrolling without breaking browsers' default scroll functions. ( You can use scrollTo() and scrollBy() )
3. descartia.js uses requestAnimationFrame() method to render scroll animation.

## How to use
#### 1. Load Essential Files
Load `descartia_core.js` and `common.css` in your html.  
htmlに`descartia_core.js`と`common.css`を読み込む
```html
<script src="descartia_core.js"></script>
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
To start Descartia.js
```js
Descartia.start();
```
To disable smooth scroll and enable default scroll  
```js
Descartia.disable();
```  
To pause smooth scroll and other Descartia.js events  
```js
Descartia.pause();
```
## Options
