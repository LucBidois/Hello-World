function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(51);
  
  stroke(255);
  noFill();
  beginShape();
  var xoff = 0;
  for (var x = 0; x < width; x++) {
    stroke(255);
    var y = noise(xoff)* height;
    vertex(x, y);
    
    xoff += 0.02;
  }
  endShape();
  
  noLoop();
}
