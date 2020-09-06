
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,bob1,bob2,bob3,bob4,bob5;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	

	roof= new Roof(400,200,400,25);
	bob1=new Bob(400,500,50);
	bob2=new Bob(450,500,50);
	bob3=new Bob(500,500,50);
	bob4=new Bob(350,500,50);
	bob5=new Bob(300,500,50);
	c1=new Catapult(roof.body,bob1.body);
	c2=new Catapult(roof.body,bob2.body);
	c3=new Catapult(roof.body,bob3.body);
	c4=new Catapult(roof.body,bob4.body);
    c5=new Catapult(roof.body,bob5.body);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  
  
  drawSprites();
 
}



