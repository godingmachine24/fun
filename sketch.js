var bg, bgImg;
var bottomGround;
var topGround;
var ball;
var paddle;
var score = 0;

function preload() {
  bgImg = loadImage("assets/bg.png");
  ballImg = loadAnimation("assets/ball.png");
}

function setup() {
  createCanvas(1000, 900);

  bottomGround = createSprite(500, 850, 1000, 20);
  bottomGround.visible = true;

  topGround = createSprite(500, 10, 1000, 20);
  topGround.visible = true;

  
  var leftGround = createSprite(10, height / 2, 20, 900);
  leftGround.visible = true;

  var rightGround = createSprite(990, height / 2, 20, 900);
  rightGround.visible = true;

  ball = createSprite(100, 200, 20, 20);
  ball.addAnimation("ball", ballImg);
  ball.scale = 0.08;
  ball.setCollider("circle", 0, 0, 70);
  ball.velocity.y = 2;
  ball.maxSpeed = 10;

  paddle = createSprite(200, 800, 100, 10);
  paddle.visible = true;

  score = 0;
}

function draw() {
  background(bgImg);

  if (keyDown("LEFT_ARROW")) {
    paddle.velocity.x = -5;
  } else if (keyDown("RIGHT_ARROW")) {
    paddle.velocity.x = 5;
  } else {
    paddle.velocity.x = 0;
  }

  ball.bounce(topGround);
  ball.bounce(bottomGround);
  ball.bounce(paddle);

  if (ball.position.x <= 0) {
    ball.velocity.x *= -1; 
  }

  if (ball.position.x >= width) {
    ball.velocity.x *= -1; 
  }

  
  if (ball.overlap(paddle)) {
    var collision = ball.collide(paddle);

    
    if (collision) {
      if (ball.position.x < paddle.position.x) {
        
        ball.velocity.x = -5;
        ball.velocity.y = -5;
      } else {
       
        ball.velocity.x = 5;
        ball.velocity.y = -5;
      }
      score++;
    }
  }

  
  if (ball.overlap(bottomGround)) {
    ball.velocity.y = 5; 
    score--;
  }

  drawSprites();

  
  fill(255);
  textSize(20);
  text("Score: " + score, 20, 30);
}
