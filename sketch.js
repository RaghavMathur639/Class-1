var ball;
function setup() {
  createCanvas(1200,1000);

  ball=createSprite(200,200,10,10)
}

function draw() 
{

  background("green");
if(keyIsDown(RIGHT_ARROW))  {
  ball.position.x = ball.position.x + 5;
}
  drawSprites();
}




