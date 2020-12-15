const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,bodies;

var box1,box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(220,200,40,40);
  box2 = new Box(240,100,40,80);

  ground = new Ground(200,350,400,25);
}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();

  ground.display();
}