var bg;
var cat;
var garden;

function preload() {
    //load the images here
    garden = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat2.png");
    mouseimg2 = loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg = createSprite(500,400,10,50);
bg.addImage(garden);

cat1 = createSprite(700,660)
cat1.addImage(cat);
cat1.scale = 0.1;

mouse1 = createSprite(100,660)
mouse1.addImage(mouseStanding);
mouse1.scale = 0.1;
}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("LEFT_ARROW")){
        cat1.velocityX = -5;
        cat1.addAnimation("cat",catRunning);
        cat1.changeAnimation("cat");
}

if(cat1.isTouching(mouse1)){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseTeasing);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catSad);
    cat1.changeAnimation("catworry");
}

if(cat.x - mouse.x < (cat.width - mouse.width)/2){

}

drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
  


}
