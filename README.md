# **descartia.js**  
<img src="images/descartia_logo_mini.png" width="300">

## Overview
descatia.js is a simple and fast JavaScript module for smooth scroll.  
descatia.jsはシンプルで軽量なスムーズスクロールを実現するJavaScriptモジュールです。
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
