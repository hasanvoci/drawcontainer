
(function() {
    var parentDiv = document.getElementById('parentDiv');
    var canvas = new fabric.Canvas('DemoCanvas');
    // if (canvas.getContext)
    // {
    //   context = canvas.getContext('2d');
    //
    //   // resize the canvas to fill browser window dynamically
    //   window.addEventListener('resize', resizeCanvas, false);
    //   resizeCanvas();
    // }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

    function resizeCanvas() {
      canvas.clear();

      var height = document.getElementById('parentDiv').offsetHeight - 10;
      var width = document.getElementById('parentDiv').offsetWidth - 10;
      canvas.setHeight(height);
      canvas.setWidth(width);
      //console.log(canvas);
      /**
       * Your drawings need to be inside this function otherwise they will be reset when
       * you resize the browser window and the canvas goes will be cleared.
       */
      //drawGrid();
      drawG();
      var src = '../images/assets/1.png';
      drawImg(src);
    }

    function drawImg(src){
      // var img = new Image();
      // img.onload = function() {
      //   context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      // };
      // img.src = src;

      fabric.Image.fromURL(src, function(oImg) {
        canvas.add(oImg);
      });
    }

    function drawG(){
      var canvasHeight = canvas.getHeight();
      var canvasWidth = canvas.getWidth();
      for (i = 0; i <= canvasHeight; i += 20)
      {
          canvas.add(new fabric.Line([0, i, canvasWidth, i], {
            stroke: '#333',
            selectable: false
          }));
      }

      for (i = 0; i <= canvasWidth; i += 20)
      {
          canvas.add(new fabric.Line([i, 0, i, canvasHeight], {
            stroke: '#333',
            selectable: false
          }));
      }
    }

    function drawGrid() {
      // do your drawing stuff here
      if (canvas.getContext)
       {
           context.strokeStyle = '#333';
           for (i = 0; i <= canvas.height; i += 20)
             {
               context.beginPath();
               context.moveTo(0, i);
               context.lineTo(canvas.width, i);
               context.stroke();
            }
           for (i = 0; i <= canvas.width; i += 20)
             {
               context.beginPath();
               context.moveTo(i, 0);
               context.lineTo(i, canvas.height);
               context.stroke();
            }
        }
    }
})();
