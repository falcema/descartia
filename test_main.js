(function(){

  var isClicked = false;
  const ssbutton = document.getElementById('text-button');
  const ssbutton1 = document.getElementById('text-button1');
  const ssbutton2 = document.getElementById('text-button2');

  window.onload = function(){
    Descatia.start();
  };

  ssbutton.addEventListener('click',function(){
    Descatia.stop();
  });

  ssbutton1.addEventListener('click',function(){
    Descatia.start();
  });

  ssbutton2.addEventListener('click',function(){
    Descatia.disable();
  });

})();