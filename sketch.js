const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var maxDrops = 500;
var drops =[];
var walking,thunder;
function preload(){
    walking = loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png")
    thunder = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
    createCanvas(400,800)
    engine = Engine.create();
    world = engine.world;
    for(var i=0;i<=maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
    umb = new Umbrella(200,400)
    bruce = createSprite(200,500)
    bruce.addAnimation("walk",walking)
    bruce.scale = 0.8
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i=0;i<=maxDrops;i++){
        drops[i].display()
    }
    animation(thunder,200,300);
    drawSprites();
    
}   

