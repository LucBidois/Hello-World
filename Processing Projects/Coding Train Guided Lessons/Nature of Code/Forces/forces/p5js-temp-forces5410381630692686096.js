let moverA;
let moverB;

function setup() {
  createCanvas(400, 400);
  moverA = new Mover(100, 200);
  moverB = new Mover(300, 200);
}

function draw() {
  background(0);
  
  
  if (mouseIsPressed) { 
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
}
  
  let gravity = createVector(0,0.2);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  
  moverA.update();
  moverB.update();
  moverA.edges();
  moverB.edges();
  moverA.show();
  moverB.show();
}
