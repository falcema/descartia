/*! Descartia.js. (C) 2019 Richard Falcema. This software is released under the MIT License. https://opensource.org/licenses/mit-license.php */
var Descatia = (function(){
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
  var l_table;
  var dummy_scroll;
  var min_width = 800;
  var isMobile = /iP(hone|(o|a)d)|Android/.test(navigator.userAgent);

  var isStarted = false;
  var isEnabled = false;

  return{
    start: function(){
      descartia_start();
    },
    pause: function(){
      if(isStarted){
        window.removeEventListener('scroll',scrollfunction);
        window.removeEventListener('resize', resize_function_timer);
        isStarted = false;
      }
    },
    disable: function(){
      descartia_disable();
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

  function scrollfunction(e){
    //e.preventDefault();
    var scrolled = window.pageYOffset;
    document.getElementById('scroll-value').innerHTML = scrolled;
    wheelScroll(e);
    //l_table.style.transform = 'translateY(-'+scrolled+'px)';
  }

  function descartia_init(){
    l_table = document.getElementsByClassName('l-table')[0];
    dummy_scroll = document.getElementsByClassName('dummy-scroll')[0];
    document.getElementsByClassName('l-page')[0].classList.add('l-page-fixed');
    w_width = window.innerWidth;
    w_height = window.innerHeight;
    l_table_height = l_table.clientHeight;
    dummy_scroll.style.height = l_table_height+'px';
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
    if(!isStarted && !isMobile && windowWidthCheck()){
      descartia_init();
      isStarted = true;
      setTimeout(function(){
        console.log(window.pageYOffset);
        l_scroll(window.pageYOffset);
        window.addEventListener('scroll',scrollfunction,{ passive: false });
        window.addEventListener('resize', resize_function_timer,false);
        document.getElementById('scroll-value').innerHTML = window.pageYOffset;
      },100);
    }
  }

  function descartia_disable(){
    document.getElementsByClassName('l-page')[0].classList.remove('l-page-fixed');
    l_table.style.transform = 'translateY(0px)';
    if(isStarted){
      window.removeEventListener('scroll',scrollfunction);
      isStarted = false;
    }
  }

  function l_scroll(y){
    offset = y;
    l_table.style.transform = 'translateY(-'+y+'px)';
  }

  function autoScroll() {
    var elapsed;

    if (amplitude) {
      elapsed = Date.now() - timestamp;
      var delta = -amplitude * Math.exp(-elapsed / timeConstant);
      if (delta > 1 || delta < -1) {
        l_scroll(target + delta);
        window.requestAnimationFrame(autoScroll);
      } else {
        l_scroll(target);

      }
    }
  };

  function wheelScroll(e) {
    timestamp = Date.now();
    timeConstant = 120;
    target = window.pageYOffset;
    if(target < 0){
      target = 0;
    }
    amplitude = target - offset;
    window.requestAnimationFrame(autoScroll);
  };
})();
