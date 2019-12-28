<img src="images/descartia_logo_mini.png" width="300" alt="descartia.js">

## Overview
descartia.js is a simple and fast JavaScript module which enables smooth inertial scroll compatible with flick scrolling of mobile devices.  
descartia.js（デカルティア.js）はスマホやタブレットなどの慣性スクロールとほぼ同等のスムーズスクロールをデスクトップブラウザ上で実現する軽量で高速なJavaScriptモジュールです。
## Feature
1. descartia.js calculates scroll position based on physical attenuation
2. descartia.js uses requestAnimationFrame() method to render scroll animation.
3. descartia.js has own requestAnimationFrame() queue inside, and it keeps the appropriate number of render requests.
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

  <div class="d-page">
    <div class="d-table">

      Page Contents.

    </div>
  </div>

  <div class="d-dummy-scroll">
  </div>

</body>
```  



## Methods
To start (and resume) descartia.js  
```javascript
Descartia.start();
```  
This method initializes variables related to HTML elements, ids, and classes, and
can be used only once. If you want to use it again, for example in the case of pjax / ajax, call `Descartia.disable()`; or `Descartia.pause();` first. Then you will able to call this method again.
<br>
<br>

To disable smooth scroll and enable default scroll  
```javascript
Descartia.disable();
```  
To pause smooth scroll and other descartia.js events  
```javascript
Descartia.pause();
```
Optional: To set minimum window width limit descartia.js works. (This method should be declared before `Descartia.start();`)
```javascript
Descartia.setMinWidth(width_value_without_px);
Descartia.setMinWidth(600); //descartia.js stops and default scroll will be enabled if width <= 600
Descartia.setMinWidth(); //null will clear min width limit
```
## Options
I'll write later.
## License
This software is released under the MIT License.  
(C) 2019 Richard Falcema.
