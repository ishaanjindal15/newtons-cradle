class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX= offsetX;
        this.offsetY= offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
   


        }

this.rope= Constraint.create(options);
World.add(world,this.rope)

    }
display(){
  
      var pointA= this.rope.bodyA.position
      var pointB= this.rope.bodyB.position
      strokeWeight(5)
     // line(pointA.x,pointA.y,pointB.x,pointB.y)
      var Anchor1X= pointA.x
      var anchor1Y= pointA.y
      var Anchor2X= pointB.x+this.offsetX
      var Anchor2Y= pointB.y+this.offsetY
      line(Anchor1X,anchor1Y,Anchor2X,Anchor2Y);

  

}
}
