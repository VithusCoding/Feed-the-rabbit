var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeLeaf,orangeLeafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  createApples()
  createLeaves()
  drawSprites();
}



function createApples() {
  if(frameCount % 80 ===0){
    apple = createSprite(0,2,20,20);
    apple.x = Math.round(random(30,370));
    apple.addImage(appleImg);
    apple.velocityY = 3;
    apple.scale = 0.075; 
  }

}

function createLeaves() {
  if(frameCount % 80 ===0){
    orangeLeaf = createSprite(0,2,20,20);
    orangeLeaf.x = Math.round(random(30,370));
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.velocityY = 3;
    orangeLeaf.scale = 0.075; 
  }

}