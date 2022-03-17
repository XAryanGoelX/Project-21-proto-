const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  var ball_options = {
    isStatic: false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

	ball = Bodies.circle(100,200,25,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  console.log(ball);

  groundObj = new Ground(width/2, 670, width, 20);
  leftSide = new Dustbin(1100, 600, 20, 120);
  rightSide = new Dustbin(1200, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  ellipse(ball.position.x,ball.position.y,25);

  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
  drawSprites();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.ball.applyForce(ball, {x:0, y:0}, {x:15, y: -15})
  }
}