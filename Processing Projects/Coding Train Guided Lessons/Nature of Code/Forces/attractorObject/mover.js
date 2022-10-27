class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = sqrt(this.mass);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }
  
  //calculate(){
  //let mouse = createVector(mouseX, mouseY);
  //this.acc = p5.Vector.sub(mouse,this.pos);
  //this.acc.setMag(0.1);
  //}
  
}
