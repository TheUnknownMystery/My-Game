var gameState;
var background;
function preload() {

  playerImg = loadImage("imported piskel.gif");
  flag = loadImage("flag.png");
  coinImg = loadImage("1.png");
  PlatfoarmImg = loadImage("platfoarm.png");
  backgroundImg = loadImage("bg.png");
  spikesImg= loadImage("spikes.png");

}
function setup() {
  createCanvas(2000, 400);
  ground = createSprite(400, 400, 2700, 300);
  ground.shapeColor = "green";


  goal = createSprite(1300, 10, 40, 40);
  goal.addImage(flag);
  goal.scale = 0.2
  mountain = createSprite(-400, 200, 800, 200);
  mountain.shapeColor = "green"
  platfoarm = createSprite(380, 100, random(180, 378), 30)
  platfoarm.scale = 0.3
  platfoarm.addImage(PlatfoarmImg);

  platfoarm1 = createSprite(880, 90, random(100, 200), 30)
  platfoarm1.scale = 0.3
  platfoarm1.addImage(PlatfoarmImg);


  platfoarm2 = createSprite(1300, 70, random(100, 200), 30);
  platfoarm2.scale = 0.3
  platfoarm2.addImage(PlatfoarmImg);

  player = createSprite(300, 60, 40, 50);
  player.scale = 1.60
  player.addImage(playerImg)

  coin = createSprite(400, 70, 20, 20)
  coin.scale = 0.04
  coin.addImage(coinImg)

  coin1 = createSprite(400, 70, 20, 20)
  coin1.scale = 0.04
  coin1.addImage(coinImg)

  coin2 = createSprite(300, 70, 20, 20)
  coin2.scale = 0.04
  coin2.addImage(coinImg)

  coin3 = createSprite(900, 60, 20, 20)
  coin3.scale = 0.04
  coin3.addImage(coinImg)
}

function draw() {
  background("lightblue")
  drawSprites();
  fill("yellow")
  textSize(40);
  text("Use arrow keys to move and press space to jump", -500, 100);
  text("collect all coins and reach the flags to win!!", -200, 200)


  if (gameState == "end") {

    background(0)
    text(" you win!!", 1000, 200)


  }
  if (isTouching(player, coin)) {

    coin.destroy();

  }

  if (isTouching(player, coin1)) {


    coin1.destroy();

  }

  if (isTouching(player, coin2)) {


    coin2.destroy();

  }

  if (isTouching(player, coin3)) {


    coin3.destroy();


  }

  if (isTouching(player, platfoarm2)) {

    gameState = "end";


  }

  if(player.y >  200){

  player.x=300
  player.y= 60

 }



  camera.position.y = player.y
  camera.position.x = player.x

  if (keyDown("space")) {

    player.velocityY = -8

  }

  if (World.frameCount % 30 === 0) {

    enemy();
  }

  movement();

  player.velocityY = player.velocityY + 0.8
  player.collide(ground);
  player.collide(platfoarm);
  player.collide(platfoarm1);
  player.collide(platfoarm2);
  player.collide(mountain);

}

function movement() {

  if (keyDown("left")) {

    player.x = player.x - 10;

  }

  if (keyDown("right")) {

    player.x = player.x + 10;

  }
  //console.log(player.x)



}
function enemy() {

  spikes = createSprite(random(100,2500), 240, 30, 30);
  spikes.addImage(spikesImg)
  spikes.scale = 0.8
  



}