class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.r = 16;
    this.mass = 2;
  }
  
  applyForce(force){
    // force.div(this.mass);  //not static 
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  edges(){
    if (this.pos.y >= height - this.r ) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } if (this.pos.x <= 0 + this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    
  }
  
  update() {
    //this.calculate();
    
    this.vel.add(this.acc);
    //this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  
  calculate(){
  let mouse = createVector(mouseX, mouseY);
  this.acc = p5.Vector.sub(mouse,this.pos);
  this.acc.setMag(0.1);
  }
  
}
