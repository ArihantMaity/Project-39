var canvas;
var Play = 1;
var End = 0;
var gameState = Play;
var helicopter,city,heli,citys,food,foodimg,foodsGroup;


function preload(){
  heli = loadImage("helicopter.png");
  citys = loadImage("Hot Air Ballon-01.png");
  foodimg = loadImage("package.png");
}

function setup(){
  canvas = createCanvas(900,500);

  city = createSprite(500,250,300,500)
  city.addImage(citys);
  city.scale = 0.5;

  helicopter = createSprite(100,200,10,30);
  helicopter.addImage(heli);
  helicopter.scale = 0.5

  foodsGroup = new Group();
 
}



function draw(){

  background("white"); 
  if(gameState === 1){
  
  if(keyDown('DOWN_ARROW')){
    helicopter.y += 5;
  }
  if(keyDown('UP_ARROW')){
    helicopter.y -= 5;
  }
  if (city.x < 200){
    city.x = 650
  }
  foods();
  city.velocityX = -10;
  }
  
 if(helicopter.isTouching(foodsGroup)){
   gameState = End;
   city.velocityX = 0;
   foodsGroup.destroyEach();
   city.destroy();
   helicopter.destroy();
   
  
 }
 fill("black");
  textSize(30);
   text("GAME OVER",450,250);
  
  drawSprites();
  }

  function foods(){
    if(frameCount%100===0){
      food=createSprite(800,300,20,20);
      food.addImage(foodimg);
      food.scale=0.25;
      food.y=Math.round(random(50,450));
      food.velocityX=-8;
      foodsGroup.add(food);
    }
  }
