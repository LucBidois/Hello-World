let fireworks = [];
let gravity;


function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  gravity = createVector(0, 0.1);
  stroke(255);
  strokeWeight(4);
  background(0);
}


function draw() {
  colorMode(RGB);
  background(0, 50);
   
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i,1);
    }
  }
  console.log(fireworks.length);
}
