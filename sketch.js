const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var hero,monster,rope,ground;
var message1,message1Image;

function preload() {
  bg = loadImage("gamingbackground2.png");
  message1Image= loadImage("Message1.png")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,200,300);
  monster.scale= 0.2

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600,110,70,70);
  box6 = new Box(600,180,70,70);
  box7 = new Box(600,250,70,70);
 box8= new Box(600,320,70,70);
 box9= new Box(600,390,70,70);
 box10= new Box(900,170,70,70);
 box11= new Box(900,240,70,70);
 box12= new Box(900,310,70,70);

message1=createSprite(500,30,10,10);
 message1.addImage(message1Image);
 message1.scale=0.5;
 

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  rope.display();
  hero.display();
  //rope.display();
  monster.display();
  box5.display()
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }
