class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true,
        friction:0
    }
     this.body = Bodies.circle(x,y,100,options)
     World.add(world,this.body)
    }
    display(){
        push()
            translate(this.body.position.x,this.body.position.y);
            fill("yellow")
            ellipseMode(CENTER)
            ellipse(0,0,100,100)
        pop()
    }
}