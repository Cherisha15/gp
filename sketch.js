var bg1, bg2, bg3;
var girl, girlImg;
var coin, coinImg;
var mushroom, mushroomImg;
var ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15;
var diamond, diamondImg;
var coinsGroup;
var score=0;
var positions = [{x:400,y:430},{x:450,y:330},{x:530,y:330}, {x:610,y:330}, {x:150,y:300}, {x:280,y:300},{x:450,y:190},{x:350,y:190},{x:400,y:430},{x:50,y:100},{x:100,y:100},{x:150,y:100},{x:520,y:120},{x:590,y:120},{x:750,y:480} ];


function preload(){
  bg1 = loadImage("images/forestbg.jpg");
  girlImg = loadAnimation("images/g1.png", "images/g2.png",  "images/g3.png");
  coinImg = loadImage("images/coin.png");
  mushroomImg = loadImage("images/obstacle1.png");
  //diamondImg = loadImage("images/d1.png","images/d6.png","images/d12.png" )
}

function setup() {
  createCanvas(900,600);

  girl = createSprite(150, 440, 50, 50);
  girl.addAnimation("running", girlImg);
  girl.scale= 0.28;

  //diamond = createSprite(200,200,10,10);
  //diamond.addAnimation("moving", diamondImg);
  //diamond.scale = 0.8;

  ig1 = createSprite(100, 510, 250, 0.1);
  ig2 = createSprite(530, 465, 240, 10);
  ig3 = createSprite(540, 400, 120, 80);
  ig4 = createSprite(400, 220, 50, 10);
  ig5 = createSprite(560, 160, 50, 10);
  ig6 = createSprite(120, 175, 140, 80);
  ig7 = createSprite(220, 330, 120, 10);
  ig8 = createSprite(750, 514, 100, 10);
  ig9 = createSprite(820, 190, 150, 120);

  ig1.visible = false;
  ig2.visible = false;
  ig3.visible = false;
  ig4.visible = false;
  ig5.visible = false;
  ig6.visible = false;
  ig7.visible = false;
  ig8.visible = false;
  ig9.visible = false;

  coinsGroup = new Group();

 


 edges = createEdgeSprites();

 girl.overlap(coinsGroup, function(collector, collected){ 
  collected.remove();
 //collected=null;
})

}

function draw() {
  background(255,255,255); 
   image (bg1, 0, 0, width, height)
  
   if(keyDown(RIGHT_ARROW)){
     girl.x= girl.x + 5;
 }

 if(keyDown(LEFT_ARROW)){
  girl.x= girl.x - 5;
}

if(keyDown(UP_ARROW)){
  girl.velocityY = - 7;
}

girl.velocityY = girl.velocityY + 0.5;

girl.collide(ig1);
girl.collide(ig2);
girl.collide(ig3);
girl.collide(ig4);
girl.collide(ig5);
girl.collide(ig6);
girl.collide(ig7);
girl.collide(ig8);
girl.collide(ig9);
girl.collide(edges[1]);
girl.collide(edges[2]);
girl.collide(edges[3]);
girl.collide(edges[0]);

 spawnCoins(positions);



 drawSprites();
}

function spawnCoins(positions =[]){
  for(var i=0; i<15; i++){
  var x,y
  x= positions[i].x;
  y= positions[i].y;

  coin1 = createSprite(x, y, 10, 10);
  coin1.addImage(coinImg);
  coin1.scale=0.05;

  coinsGroup.add(coin1);
  }
 

}