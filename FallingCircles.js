

class FallingCircles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.gravity = random(-5, 5);

    this.saturation = 1;

    this.red = 255;
    this.green = 255;
    this.blue = 255;

    this.c = color(red, green, blue);

  }

  show(){
    fill(this.c);
    ellipse(this.x, this.y, this.r);
  }

  moving(){
    this.y += this.gravity;
  }

  grow(){
    this.r += 0.1;
  }

  increaseSaturation(val){
    this.c = color('hsb('+ val +', 100%, ' + this.saturation + '%)');
    this.saturation++;
  }
     
}