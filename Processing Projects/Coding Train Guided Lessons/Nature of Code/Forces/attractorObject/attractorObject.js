let mover;
let attractor;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(50, 50, 100);
  attractor = new Attractor(200,200,100);
}

function draw() {
  background(0);
  mover.update();
  mover.show();
  
  attractor.attract(mover);
  attractor.show();
}
