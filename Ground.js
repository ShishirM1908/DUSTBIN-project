class Ground {
    constructor(){
        var Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,380,800,10,Options)
        World.add(world,this.body)
    }
   display(){
       rect(this.body.position.x,this.body.position.y,800,10)
   }
}