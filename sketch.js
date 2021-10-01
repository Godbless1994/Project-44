//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
 //var jumpingImg;
 var runnerImg;
 var player;
 var bg, bgImg;
 var enemyImg1,enemyImg2,enemyImg3,enemy1,enemy2,enemy3;
 //var lazer, lazerImg;
 function preload(){
   runnerImg= loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png");
   bgImg = loadImage("bg.jpg");
   enemy1 = loadImage("spike1.png");
   enemy2 = loadImage("spike2.png");
   enemy3 = loadImage("spike3.png");
   //lazerImg = loadImage("lazer.png");
 }

function setup() {
  createCanvas(1200,1200);
   bg=createSprite(100,300,1000,700);
   bg.addImage(bgImg);
   bg.scale=4;

   player = createSprite(100,700,30,50);
   player.addAnimation("runner",runnerImg);
   player.scale=1;
  //engine = Engine.create();
  //world = engine.world;
  invisibleGround=createSprite(100,790,2200,20);
  invisibleGround.visible=false;

  
}


function draw() 
{
  background(0);
  //Engine.update(engine);
  bg.velocityX=-3;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
 spawnEnemy1();
 spawnEnemy2();
 spawnEnemy3();

  player.collide(invisibleGround);
  drawSprites();
}

function spawnEnemy1() {
  if(frameCount % 60 === 0) {
    var enemy1 = createSprite(1200,800,20,30);
    enemy1.addImage(enemyImg1);
    //enemy.setCollider('circle',0,0,45)
    // enemy.debug = true
  
    enemy.velocityX = -6;
    
    //generate random enemys
  
    
    //assign scale and lifetime to the enemy           
    enemy1.scale = 0.3;
    //enemy.lifetime = 300;
    //enemy.depth = trex.depth;
    //trex.depth +=1;
    //add each enemy to the group
    //enemysGroup.add(enemy);
  }
}

//function spawnLazer(){
  //if(frameCount%60===0){
  //lazer = createSprite(900,500,40,20);
  //lazer.addImage(lazerImg);
 // lazer.scale=0.5;
//  lazer.x=1200;
  //lazer.x=enemy.x;
  //lazer.velocityX=-5;
//}
//}

function spawnEnemy2() {
  if(frameCount % 100 === 0) {
    var enemy2 = createSprite(1200,300,20,30);
    enemy2.addImage(enemyImg2);
    //enemy.setCollider('circle',0,0,45)
    // enemy.debug = true
  
    enemy2.velocityX = -6;
    
    //generate random enemys
    
    
    //assign scale and lifetime to the enemy           
    enemy2.scale = 0.3;
    //enemy.lifetime = 300;
    //enemy.depth = trex.depth;
    //trex.depth +=1;
    //add each enemy to the group
    //enemysGroup.add(enemy);
  }
}
function spawnEnemy3() {
  if(frameCount % 130 === 0) {
    var enemy3 = createSprite(1200,640,20,30);
    enemy3.addImage(enemyImg3);
    //enemy.setCollider('circle',0,0,45)
    // enemy.debug = true
  
    enemy3.velocityX = -6;
    
    //generate random enemys
   
    
    
    //assign scale and lifetime to the enemy           
    enemy3.scale = 0.3;
    //enemy.lifetime = 300;
    //enemy.depth = trex.depth;
    //trex.depth +=1;
    //add each enemy to the group
    //enemysGroup.add(enemy);
  }
}
