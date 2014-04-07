$(document).ready(function(){
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext("2d");
  var width = $("#canvas").width();
  var height = $("#canvas").height();

  var cellWidth = 10;

  ctx.fillStyle = "white";
  ctx.fillRect(0,0,width,height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0,0,width,height);

  var snakeArray;
  createSnake();
  function createSnake(){
    var length = 5;
    snakeArray = [];
    for(var i = length-1; i >= 0; i--){
      snakeArray.push({x:i, y:0});
    }
  }

  function paint(){
    for(var i=0; i<snakeArray.length; i++){
      var c = snakeArray[i];

      ctx.fillStyle = "blue";
      ctx.fillRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth);
      ctx.strokeStyle = "white";
      ctx.strokeRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth);
    }
  }
  gameLoop = setInterval(paint, 60);

});