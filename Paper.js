class Paper {
    constructor(){
        var Options={
            restitution:0.5
        }
        this.body=Bodies.circle(50,100,20,Options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,20)
       
    }
}