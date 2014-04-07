$(document).ready(function(){
  //create canvas
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext("2d");
  var width = $("#canvas").width();
  var height = $("#canvas").height();

  var cellWidth = 10;
  var direction = "right";


  //create snake
  var snakeArray;
  createSnake();
  function createSnake(){
    var length = 5;
    snakeArray = [];
    for(var i = length-1; i >= 0; i--){
      snakeArray.push({x:i, y:0});
    }
  }

  //paint snake
  function paint(){
    //create field
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,width,height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0,0,width,height);

    var headX = snakeArray[0].x;
    var headY = snakeArray[0].y;

    if(direction == "right") headX++;
    else if(direction == "left") headX--;
    else if(direction == "up") headY--;
    else if(direction == "down") headY++;

    if(headX == -1 || headX == width/cellWidth || headY == -1 || headY == height/cellWidth){
      return;
    }

    var tail = snakeArray.pop();
    tail.x = headX; tail.y = headY;
    snakeArray.unshift(tail);

    for(var i=0; i<snakeArray.length; i++){
      var c = snakeArray[i];

      ctx.fillStyle = "blue";
      ctx.fillRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth);
      ctx.strokeStyle = "white";
      ctx.strokeRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth);
    }
  }

  $(document).keydown(function(e){
    var key = e.which;
    if(key == "37" && direction != "right") direction = "left";
    else if(key == "38" && direction != "down") direction = "up";
    else if(key == "39" && direction != "left") direction = "right";
    else if(key == "40" && direction != "up") direction = "down";
  })

  gameLoop = setInterval(paint, 60);

});