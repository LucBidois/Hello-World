class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }
  
  drag() {
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.1;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);
        
    this.applyForce(drag);
  }
  
  applyForce(force){
    // force.div(this.mass);  //not static 
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  applyGravity(g) {
  this.acc.add(g);
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
