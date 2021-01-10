
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var ground;
var box1,box2,box3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(50,300,45);
  ground=new Ground(400,650,800,10);
  box1=new Dustbin(550,580,20,90);
  box2=new Dustbin(750,580,20,90);
  box3=new Dustbin(650,630,223,27);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //paper.position.x= paperObject.position.x;
 // paper.position.y = paperObject.position.y; 

  
  
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
}

 function keyPressed(){
  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
 


}

