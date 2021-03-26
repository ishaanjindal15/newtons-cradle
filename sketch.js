
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ground;
var bob1;
var bob2;
var bob3;
var bob4;
var rope;
var rope2;
var rope3;
var rope4;
var bob5;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(500,300,300,20);
	bob1=new Bob(380,500);
bob2 = new Bob(440,500);
bob3 = new Bob(500,500);
bob4 =new Bob(560,500);
bob5 = new Bob(620,500);
rope = new Rope(bob1.body,ground.body,-2*bob1.radius,0);
rope2 = new Rope(bob2.body,ground.body,-bob2.radius,0);
rope3 = new Rope(bob3.body,ground.body,0,0);
rope4 = new Rope(bob4.body,ground.body,bob4.radius,0);
rope5 = new Rope(bob5.body,ground.body,2*bob5.radius,0);


	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode==UP_ARROW && bob1.body.position.y>=500){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1500,y:-1500})
}


}


