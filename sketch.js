const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hero, rope;
var monster;
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block26;

function preload() {
  //preload the images here
  backgroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1365, 655);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground1 = new Ground(327, 430, 1000, 15);
  ground2 = new Ground(1000, 280, 200, 15);

  block1 = new Block(490, 400);
  block2 = new Block(490, 370);
  block3 = new Block(490, 340);
  block4 = new Block(490, 310);
  block5 = new Block(490, 280);
  block6 = new Block(490, 250);
  block7 = new Block(490, 220);
  
  block8 = new Block(560, 400);
  block9 = new Block(560, 370);
  block10 = new Block(560, 340);
  block11 = new Block(560, 310);
  block12 = new Block(560, 280);
  block13 = new Block(560, 250);

  block14 = new Block(630, 400);
  block15 = new Block(630, 370);
  block16 = new Block(630, 340);
  block17 = new Block(630, 310);
  block18 = new Block(630, 280);
  block19 = new Block(630, 250);
  block20 = new Block(630, 220);
  block21 = new Block(630, 190);

  block22 = new Block(700, 400);
  block23 = new Block(700, 370);
  block24 = new Block(700, 340);
  block25 = new Block(700, 310);
  block26 = new Block(700, 280);

  hero = new Hero(200, 200, 200, 100);
  rope = new Fly(hero.body, {x : 140, y : 170});
  monster = new Monster(1000, 200, 150, 150);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  hero.display();
  rope.display();
  monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
}

function mouseDragged() {
    Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
  rope.fly();
}