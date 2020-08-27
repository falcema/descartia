(function(){

  var isClicked = false;
  var isBackground = false;
  const ssbutton = document.getElementById('text-button');
  const ssbutton1 = document.getElementById('text-button1');
  const ssbutton2 = document.getElementById('text-button2');
  const scrollobj = document.getElementsByClassName('d-table')[0];
  const scrollval = document.getElementById('descartia-value');
  const observer = new MutationObserver(records => {
    scrollval.innerHTML = Descartia.currentScrolled().toFixed(2);
  });

  window.onload = function(){
    Descartia.setMinWidth(640);
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
    var scrolled = window.pageYOffset.toFixed(2);;
    var menubg = document.getElementById('menu-bg');
    document.getElementById('scroll-value').innerHTML = scrolled;
    if(window.innerWidth > 1400){
      if(scrolled > 700 && !isBackground){
        isBackground = true;
        menubg.style.opacity = 1;
      }
      if(scrolled <= 700 && isBackground){
        isBackground = false;
        menubg.style.opacity = 0;
      }
    }
    else{
      if(scrolled > window.innerWidth * 0.5 && !isBackground){
        isBackground = true;
        menubg.style.opacity = 1;
      }
      if(scrolled <= window.innerWidth * 0.5 && isBackground){
        isBackground = false;
        menubg.style.opacity = 0;
      }
    }


  }


})();
