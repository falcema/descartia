(function(){

  var isClicked = false;
  const ssbutton = document.getElementById('text-button');

  window.onload = function(){
    Descatia.start();
  };

  ssbutton.addEventListener('click',function(){
    if(isClicked){
      isClicked = false;
      ssbutton.innerHTML = "Stop";
      Descatia.start();
    }
    else{
      isClicked = true;
      ssbutton.innerHTML = "Start";
      Descatia.stop();
    }
  });

})();
