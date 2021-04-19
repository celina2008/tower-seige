class Polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        
        this.x=x
        this.y=y
        this.polygon = Bodies.circle(50,200,20)
      
      
        World.add(world,this.polygon);
      }
    }