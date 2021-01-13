class Bird extends BaseClass {
constructor(x,y){
  var options = {
    'restitution':1,
    'friction':1.0,
    'density':1.0
}
    super(x,y,50,50,options);
    this.image = loadImage("sprites/bird.png");
  }
  
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
