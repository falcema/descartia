<img src="images/descartia_logo_mini.png" width="300" alt="descartia.js">

## Overview
descartia.js is a simple and fast JavaScript module which enables smooth inertial scroll compatible with flick scrolling of mobile devices.  
descartia.js（デカルティア.js）はスマホやタブレットなどの慣性スクロールとほぼ同等のスムーズスクロールをデスクトップブラウザ上で実現する軽量で高速なJavaScriptモジュールです。
## Feature
1. descartia.js calculates scroll animation based on physical attenuation
2. descartia.js uses requestAnimationFrame() method to render scroll animation.
3. descartia.js has own requestAnimationFrame() queue inside, and it keeps the appropriate number of render requests.
3. descartia.js does not break browsers' default scroll functions.  
( You can use scrollTo(), scrollBy(), browsers' scroll bars, etc. )
4. descartia.js can detect window width, and change its behavior. So you can use it in a responsive layout.
5. descartia.js stops working automatically on mobile touchscreen devices to prevent conflict with native scroll.
6. descartia.js stops working automatically on Mac laptops to prevent conflict with native inertial scroll of the trackpad. (Experimental)


## How to use
#### 1. Load File
Load `descartia.js`  
htmlに`descartia.js`を読み込む
```html
<script src="descartia.js"></script>
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
#### 3. Apply styles to the elements
```css
.d-page{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.d-page-fixed{
  position: fixed;
}
.d-dummy-scroll{
  width: 100%;
  height: 0;
  position:absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
```
OR load css
```html
<link rel="stylesheet" type="text/css" href="descartia.style.css">
```
`descartia.js` calculates scrollable length from height of `.d-page`. All child elements of `.d-page` should be `position: static;` (default of position). In the case of using 'fixed' or 'absolute', proper height value must be applied to `.d-page` before descartia.js execution and after every resize event. (not recommended)



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
I'll write this section later.
## License
This software is released under the MIT License.  
(C) 2019 Richard Falcema.
