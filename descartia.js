/*! descartia.js. (C) 2019 Richard Falcema.
https://github.com/falcema/descartia
This software is released under the MIT License. https://opensource.org/licenses/mit-license.php */
var Descartia = (function(){
  var w_width = window.innerWidth;
  var w_height = window.innerHeight;
  var offset;
  var y_max;
  var timestamp;
  var amplitude;
  var target;
  var timeConstant;
  var l_table_height;
  var debounceTimer;
  var debounceTimer2;
  var throttleTimer = Date.now();
  var l_table;
  var dummy_scroll;
  var min_width = null;
  var frameIds = [0];
  var isMobile = /iP(hone|(o|a)d)|Android/.test(navigator.userAgent);

  var isStarted = false;
  var isRendering = false;

  return{
    start: function(){
      descartia_start();
    },
    pause: function(){
      descartia_pause();
    },
    disable: function(){
      descartia_disable();
    },
    setMinWidth: function(width){
      descartia_setwidth(width);
    }
  };

  function windowWidthCheck(){
    if(min_width == null){
      return true;
    }
    else if(window.innerWidth > min_width){
      return true;
    }
    else{
      return false;
    }
  }

  function resize_function_timer(){
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
        descartia_resize();
    }, 100);
  }

  function render_function_timer(){
    if(throttleTimer + 17 - Date.now() < 0){
      throttleTimer = Date.now();
      scrollfunction();
      clearTimeout(debounceTimer2);
      debounceTimer2 = setTimeout(function() {
        scrollfunction();
    }, 20);
    }
  }

  function scrollfunction(){
    //e.preventDefault();
    //var scrolled = window.pageYOffset;
    //document.getElementById('scroll-value').innerHTML = scrolled;
    wheelScroll();
    //l_table.style.transform = 'translateY(-'+scrolled+'px)';
  }

  function descartia_init(){
    l_table = document.getElementsByClassName('l-table')[0];
    l_table_height = l_table.clientHeight;
    dummy_scroll = document.getElementsByClassName('dummy-scroll')[0];
    dummy_scroll.style.height = l_table_height+'px';
    l_scroll(window.pageYOffset);
    //さきにdummyに高さを与えないでfixedをaddするとscroll値が0になるので注意
    document.getElementsByClassName('l-page')[0].classList.add('l-page-fixed');
    w_width = window.innerWidth;
    w_height = window.innerHeight;
    y_max = l_table_height - w_height;
    offset = 0;
    console.log('descartia.js executed');
  }

  function descartia_resize(){
    if(isStarted){
      w_width = window.innerWidth;
      w_height = window.innerHeight;
      l_table_height = l_table.clientHeight;
      dummy_scroll.style.height = l_table_height+'px';
      y_max = l_table_height - w_height;
      l_scroll(window.pageYOffset);
      if(windowWidthCheck()==false){
        descartia_disable();
      }
    }
    else{
      if(windowWidthCheck()==true){
        descartia_start();
      }
    }
  }

  function descartia_start(){
    if(!isStarted && !isMobile){
      if(windowWidthCheck()){
        descartia_init();
        isStarted = true;
        setTimeout(function(){
          console.log(window.pageYOffset);
          l_scroll(window.pageYOffset);
          window.addEventListener('scroll',render_function_timer,{ passive: false });
          window.addEventListener('resize', resize_function_timer,false);
          //document.getElementById('scroll-value').innerHTML = window.pageYOffset;
        },100);
      }
      else{
        window.addEventListener('resize', resize_function_timer,false);
      }
    }
  }

  function descartia_pause(){
    if(isStarted){
      window.removeEventListener('scroll',render_function_timer);
      window.removeEventListener('resize', resize_function_timer);
      isStarted = false;
    }
  }

  function descartia_disable(){
    document.getElementsByClassName('l-page')[0].classList.remove('l-page-fixed');
    if(isStarted){
      l_table.style.transform = 'translate3D(0px,0px,0px)';
      window.removeEventListener('scroll',render_function_timer);
      isStarted = false;
    }
  }

  function descartia_setwidth(width){
    if(width == null){
      min_width = null;
    }
    else if(typeof width == "number"){
      min_width = width;
    }
    else{

    }
  }

  function l_scroll(y){
    offset = y;
    l_table.style.transform = 'translate3D(0px,-'+y+'px,0px)';
  }

  function autoScroll() {
    var elapsed;

    if (amplitude) {
      elapsed = Date.now() - timestamp;
      var delta = -amplitude * Math.exp(-elapsed / timeConstant);
      if (delta > 1 || delta < -1) {
        l_scroll(target + delta);
        var requestId = window.requestAnimationFrame(autoScroll);
        frameIds.push(requestId);
      } else {
        l_scroll(target);
        isRendering = false;

      }
    }
  };

  function wheelScroll() {
    isRendering = true;
    timestamp = Date.now();
    timeConstant = 120;
    target = window.pageYOffset;
    amplitude = target - offset;
    var latestId_length = frameIds.length;
    for(var i = 0; i < latestId_length; i++){
      window.cancelAnimationFrame(frameIds[i]);
    }
    frameIds.length = 0;
    var requestId = window.requestAnimationFrame(autoScroll);
    frameIds.push(requestId);
  };
})();
