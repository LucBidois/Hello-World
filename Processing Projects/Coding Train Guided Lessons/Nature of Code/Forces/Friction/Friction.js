let movers = [];
let mu = 0.1;

function setup() {
  createCanvas(400, 400);
  for (let i=0; i < 10; i++) {
    movers[i] = new Mover(random(width), 200, random(1, 8));
  }
}

function draw() {
  background(0);
  
  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }  
    let g = createVector(0,0.2);
    let weight = p5.Vector.mult(g, mover.mass);
    mover.applyForce(weight);
    mover.friction();
    mover.update();
    mover.edges();
    mover.show();
  }
  
//  if (mouseIsPressed) { 
//    let wind = createVector(0.1, 0);
//    for (let i = movers.length; i <= 0; i--) {
//      movers[i].applyForce(wind);
//    }
//}
  
//  let g = createVector(0,0.2);

//  for (i = movers.length; i <= 0 ; i-- ) {
//    let weight = p5.Vector.mult(g, movers[i].mass);
//    movers[i].applyForce(weight);
//    movers[i].friction();
//    movers[i].update();
//    movers[i].show();
//  }
}
