

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[]
var maxDrops=100;
var thunderCreatedFrame=0;


function preload() {
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");

    walking1=loadImage("walking_1.png");
    walking2=loadImage("walking_2.png");
    walking3=loadImage("walking_3.png");
    walking4=loadImage("walking_4.png");
    walking5=loadImage("walking_5.png");
    walking6=loadImage("walking_6.png");
    walking7=loadImage("walking_7.png");
    walking8=loadImage("walking_8.png");

}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    umbrella=new Umbrella(200,500);

    if(frameCount%150 === 0){
        for(var i=0; i<maxDrops; i++){ drops.push(new Drop(random(0,400), random(0,400))); }

    }

}

function draw(){
    background(0);
    Engine.update(engine);
    
    umbrella.display();

    rand=Math.round(random(1,4))

    if(frameCount%150===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
            
        }
        thunder.scale=random(0.3,0.6)
    }
    for(var i=0;i<Maxdrops;i++){
        drop[i].display()
        drop[i].Update()
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){ thunder.destroy(); }
    drawSprites();
}
