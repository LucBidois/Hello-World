let x;
let y;

function setup() {
  createCanvas(400,400);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  point(x,y);
  //circle(x, y, 3, 3);
  const r = floor(random(4));
  
  switch(r) {
    case 0:
      x++;
      break;
    case 1:
      x--;
      break;
    case 2: 
      y++;
      break;
    case 3:
      y--;
      break;
  }   
  stroke(255,0,0);
  point(x,y);
}
