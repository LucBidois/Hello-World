class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }
  
  update() {
    this.calculate();
    
    this.vel.add(this.acc);
    this.vel.limit(5);
    
    this.pos.add(this.vel);
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32, 32);
  }
  
  calculate(){
  let mouse = createVector(mouseX, mouseY);
  this.acc = p5.Vector.sub(mouse,this.pos);
  this.acc.setMag(0.1);
  }
  
}
