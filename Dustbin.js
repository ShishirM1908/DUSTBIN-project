class Dustbin {
    constructor(x,y,width,height){
        var Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,Options)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
   display(){
      
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
       
   }
}