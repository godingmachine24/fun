var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var paddle;

function preload(){
  bgImg = loadImage("assets/bg.png");
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup(){
  
  bg = createSprite(165, 485, 1, 1);
  bg.addImage(bgImg);
  bg.scale = 1.3;

 
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  
  balloon = createSprite(100, 200, 20, 20);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;
  
 
  paddle = createSprite(200, 380, 100, 10);
}

function draw() {
  background("black");
  
  
  if (keyDown("space")) {
    balloon.velocityY = -6;
  }

 
  balloon.velocityY = balloon.velocityY + 2;
  
  
  if (keyDown(LEFT_ARROW) && paddle.x > 50) {
    paddle.x -= 5;
  }
  if (keyDown(RIGHT_ARROW) && paddle.x < 350) {
    paddle.x += 5;
  }

  
  if (balloon.isTouching(paddle)) {
    balloon.velocityY = -balloon.velocityY; 
  }

  drawSprites();
}