const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,590,800,20,ground_options);
    World.add(world,ground);

    var ball_option ={
        restitution:1.0
    }
    ball = Bodies.circle(200,0,20,ball_option)
    World.add(world,ball)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
    
}