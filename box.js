class Box {

    constructor(x,y,w,h){

        var options ={
            restitution : 0.5,
            density: 0.6,
            friction: 0.3
          }
        this.box = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world,this.box);
    }

    display(){
     push();
      translate(this.box.position.x,this.box.position.y);
      rotate(this.box.angle);  
     rectMode(CENTER);
     fill("white");
     rect(0,0,this.width,this.height);
     pop();
    }


}