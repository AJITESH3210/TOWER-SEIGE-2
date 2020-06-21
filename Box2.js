class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      if(this.body.speed < 3){
        super.display();
        fill(248, 255, 63);
       }
       else{
        World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      fill(248, 255, 63);
      pop();
       }
    }
  }
