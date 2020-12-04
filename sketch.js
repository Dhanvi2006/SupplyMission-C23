var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box1_sprite,box2,box2_sprite,box3,box3_sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() 
{
    createCanvas(800, 600);
    rectMode(CENTER);
    

    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-10, width,10);
    groundSprite.shapeColor=color(255)

    box1_sprite=createSprite(290,540,10,90);
    box1_sprite.shapeColor="red";

    box2_sprite=createSprite(510,540,10,90);
    box2_sprite.shapeColor="red";

    box3_sprite=createSprite(400,580,220,10);
    box3_sprite.shapeColor="red";


    engine = Engine.create();
    world = engine.world;

    
    

    //Create a Ground
    ground = Bodies.rectangle(width/2, 580, width, 10 , {isStatic:true} );
    World.add(world, ground);

     packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
     World.add(world, packageBody);

     box1 = Bodies.rectangle(290,540,10,90);
     World.add(world,box1);

     box2 = Bodies.rectangle(510,540,10,90);
     World.add(world,box2);

     box3 = Bodies.rectangle(400,580,220,10);
     World.add(world,box3);

    Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
 
  keyPressed();
  drawSprites();
}

function keyPressed() 
{
    
 if (keyCode === DOWN_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     
     Matter.Body.setStatic(packageBody,false);
  }
}




