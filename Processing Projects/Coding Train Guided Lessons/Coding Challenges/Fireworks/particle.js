

function Particle(x,y,hu,firework) {
  this.hu = hu;
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  
  if (firework) {
    this.vel = createVector(0, random(-8,-4)); 
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1));
    this.vel.add(createVector(0,-2));
  }
 
  this.acc = createVector(0,0);
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
  this.update = function() {
    if (!this.firework) {
      //this.vel.mult(0.95);
      this.lifespan -= 4;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);  
  }
  
  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, this.lifespan, this.lifespan, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}
