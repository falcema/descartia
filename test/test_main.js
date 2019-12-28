(function(){

  var isClicked = false;
  const ssbutton = document.getElementById('text-button');
  const ssbutton1 = document.getElementById('text-button1');
  const ssbutton2 = document.getElementById('text-button2');
  const scrollobj = document.getElementsByClassName('d-table')[0];
  const scrollval = document.getElementById('descartia-value');
  const observer = new MutationObserver(records => {
    scrollval.innerHTML = Descartia.currentScrolled();
  });

  window.onload = function(){
    Descartia.setMinWidth(600);
    Descartia.start();
    observer.observe(scrollobj,{
      attributes: true,
      attributeFilter: ['class','style']
    });


  };

  ssbutton.addEventListener('click',function(){
    Descartia.pause();
  });

  ssbutton1.addEventListener('click',function(){
    Descartia.start();
  });

  ssbutton2.addEventListener('click',function(){
    Descartia.disable();
  });

  window.addEventListener('scroll',value_indicator);
  function value_indicator(){
    var scrolled = window.pageYOffset;
    document.getElementById('scroll-value').innerHTML = scrolled;
  }


})();
