(function(){
  console.log('executed');

  var table = document.querySelector('.l-table');
  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  window.addEventListener('scroll',scrollfunction,{ passive: false });
  function scrollfunction(e){
    //e.preventDefault();
    var scrolled = window.pageYOffset;
    document.getElementById('scroll-value').innerHTML = scrolled;
    table.style.transform = 'translateY(-'+scrolled+'px)';

  }


}());
