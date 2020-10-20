const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object1, object2, ground;


function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
 option = {
   restitution: 1.0
 }
 object1 = Bodies.circle(400, 200, 50, option);
 
 object2 = Bodies.circle(400, 300, 50, option);

 ground_option = {
   isStatic : true
 }
 ground = Bodies.rectangle(200, height, 800, 20,ground_option);
 World.add(world,ground);
World.add(world,object1);
World.add(world,object2);
}

function draw() {
  background(0); 
  Engine.update(engine) 
 ellipseMode(CENTER);
 fill("blue");
 ellipse(object1.position.x, object1.position.y, 50, 50);
 fill("green");
 ellipse(object2.position.x, object2.position.y, 50, 50);
 rectMode(CENTER);
 fill("brown");
rect(ground.position.x,ground.position.y, 800, 20);

}