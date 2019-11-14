(function(){
  console.log('executed');

  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  window.addEventListener(scroll_event,disableScroll,{ passive: false });
  function disableScroll(e){
    //e.preventDefault();
    var scrolled = window.pageYOffset;
    document.getElementById('scroll-value').innerHTML = scrolled;

  }


}());
