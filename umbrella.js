class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("walking_1.png")
      this.body = Bodies.circle(x,y,50,options);
      this.r=50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      fill("brown");
      image(this.image,pos.x, pos.y,300,300);
    }
  };
