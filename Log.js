class Log extends BaseClass{
  constructor(x,y,height,angle){
    var options = {
      'restitution':1,
      'friction':1.0,
      'density':0.5
  }
    super(x,y,20,height,angle,options);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}