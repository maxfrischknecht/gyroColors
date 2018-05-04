

class FallingCircles {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.r = 50;
    this.gravity = random(-5, 5);

    this.val = value;
    this.saturation = 100;

    this.c = color('hsb('+ this.val +', 100%, ' + this.saturation + '%)');

  }

  show(){
    fill(this.c);
    ellipse(this.x, this.y, this.r);
  }

  moving(){
    this.y += this.gravity;
    this.x += this.gravity;
  }

  randomWalker(){
    let choice = int(random(4));

    if (choice == 0) {
      this.x+=3; // move right
    } else if (choice == 1) {
      this.x-=3; // move left
    } else if (choice == 2) {
      this.y+=3; // move down
    } else {
      this.y-=3; // move up
    }

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);

  }

  grow(){
    this.r += 0.1;
  }

  increaseSaturation(){
    // console.log(val);
    this.c = color('hsb('+ this.val +', 100%, ' + this.saturation + '%)');
    if (this.saturation > 10) { // should be 10
      this.saturation = this.saturation - 0.3;
    }
  
  }
     
}