(function(){

  var isClicked = false;
  const ssbutton = document.getElementById('text-button');
  const ssbutton1 = document.getElementById('text-button1');
  const ssbutton2 = document.getElementById('text-button2');

  window.onload = function(){
    var canvas = document.createElement('canvas');
    var gl;
    var debugInfo;
    var vendor;
    var renderer;

    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }

    if (gl) {
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
    console.log(renderer);
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
