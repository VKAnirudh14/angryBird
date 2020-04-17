const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,box1,box2;
var pig1,log1;
var box3,box4;
var  pig2,log2;
var log3,log4,log5;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new pig(810,350);
    log1 = new log(810,260,300,PI/2);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new pig(810,220);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(810,180,300,PI/2);
    log4 = new log(760,120,150,PI/4);
    log5 = new log(870,120,150,-PI/4);
    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    bird1.display();
}