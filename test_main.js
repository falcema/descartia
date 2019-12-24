(function(){

  var isClicked = false;
  const ssbutton = document.getElementById('text-button');
  const ssbutton1 = document.getElementById('text-button1');
  const ssbutton2 = document.getElementById('text-button2');

  window.onload = function(){
    Descartia.setMinWidth(600);
    Descartia.start();
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

})();
