//Luc Bidois

let pos;

function setup() {
  createCanvas(400,400);
  pos = createVector(width/2, height/2);
  background(0);
}


function draw() {
  stroke(255, 100);
  strokeWeight(2);
  point(pos.x, pos.y);
  const r = floor(random(4));
  pos.x = pos.x + random(-1, 1);
  pos.y = pos.y + random(-1, 1);
}
