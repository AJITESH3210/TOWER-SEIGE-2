class Box3 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;

    }
    display(){
      if(this.body.speed < 3){
        super.display();
        fill(63, 82, 255);
       }
       else{
        World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      
      pop();
       }

     }
  }
