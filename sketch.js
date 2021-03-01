function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
   fixedRect.shapeColor="green"; 
  movingRect=createSprite(200,200,80,30);
   movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255);
  movingRect.x= World.mouseX;
   movingRect.y= World.mouseY;
    if(movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y-movingRect.y< movingRect.height/2 + fixedRect.height/2){ 
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red"; }
       else{
       fixedRect.shapeColor="green";
   movingRect.shapeColor="green"; }  
  drawSprites();
}