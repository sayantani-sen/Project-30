class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        if(this.body.speed < 3){
          this.body.display();
        }
        else {
          World.remove(World, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          var pos = this.body.position;
          rect(pos.x,pos.y,40,50);
          // image(this.image, this.body.position.x, this.body.position.y, 50,50)
          pop();
        }
        
    
      }
}