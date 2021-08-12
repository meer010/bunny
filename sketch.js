function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,800);
  textSize(30)
  textFont('Georgia')
  fill("red")
  edges=createEdgeSprites();
  carrot=createSprite(600,0,50,50);
  bunny=createSprite(5,600,25,25);
  brick1=createSprite(70,300,150,25);
  brick2=createSprite(200,300,80,25);
  brick3=createSprite(330,300,80,25);
  brick4=createSprite(430,300,60,25);
  brick5=createSprite(570,300,140,25);
  brick1a=createSprite(50,370,100,25);
  brick2a=createSprite(200,370,140,25);
  brick3a=createSprite(350,370,80,25);
  brick4a=createSprite(470,370,80,25);
  brick5a=createSprite(570,370,80,25);
  // player1.velocityY=5;
  // player2.velocityX=5;
  // player2.velocityY=5;
  
 
}

function draw() {
  background("black"); 
  carrot.bounceOff(edges[0]); 
  carrot.bounceOff(edges[1]); 
  carrot.bounceOff(edges[2]); 
  carrot.bounceOff(edges[3]); 

  bunny.bounceOff(edges[0]); 
  bunny.bounceOff(edges[1]); 
  bunny.bounceOff(edges[2]); 
  bunny.bounceOff(edges[3]);

  bunny.shapeColor="pink";
  carrot.shapeColor="red"
  
  if(keyDown("left"))
  {
    bunny.x= bunny.x -5;
  }
  if (keyDown("right"))
  {
    bunny.x= bunny.x+5;
  }
  if (keyDown("up"))
  {
    bunny.y= bunny.y -5;
  }
  if (keyDown("down"))
  {
    bunny.y= bunny.y+5;
  }
 

  if (bunny.isTouching(brick1)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick2)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick3)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick4)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick5)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick1a)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick2a)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick3a)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick4a)){
    bunny.x=5;
    bunny.y=600;
 
  }
  if (bunny.isTouching(brick5a)){
    bunny.x=5;
    bunny.y=600;
  }
  if (bunny.isTouching(carrot)){
    text('you won',300,400);
    textSize(20);
  }


  drawSprites();

  
}
