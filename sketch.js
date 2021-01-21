const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7,block8, block9;
var block10, block11, block12, block13, block14, block15, block16,block17,block18,block19,block20,block21;
var block22, block23, block24,block25;
var polygon, polygon_img;
var slingShot;

function preload(){
    polygon_img = loadImage("polygon.png");
}
function setup(){
    createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,690,1200,20);
    
    stand1 = new Ground(800,300,270,10);
    stand2 = new Ground(390,500,320,10);

    block1 = new Box(880,270);
    block2 = new Box(840,270);
    block3 = new Box(800,270);
    block4 = new Box(760,270);
    block5 = new Box(720,270);
    block6 = new Box(840,220);
    block7 = new Box(800,220);
    block8 = new Box(760,220);
    block9 = new Box(800,170);

    block10 = new Box(510,470);
    block11 = new Box(470,470);
    block12 = new Box(430,470);
    block13 = new Box(390,470);
    block14 = new Box(350,470);
    block15 = new Box(310,470);
    block16 = new Box(270,470);
    block17 = new Box(310,420);
    block18 = new Box(470,420);
    block19 = new Box(430,420);
    block20 = new Box(390,420);
    block21 = new Box(350,420);
    block22 = new Box(390,370);
    block23 = new Box(350,370);
    block24 = new Box(430,370);
    block25 = new Box(390,320);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

}
function draw(){
    background(0);
    rectMode(CENTER);
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    Engine.update(engine);

    ground.display();
    
    stand1.display();
    stand2.display();

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

    slingShot.display();

    mouseDragged();
    mouseReleased();
    keyPressed();

    
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}

