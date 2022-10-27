void setup() {
  size(640, 360);
  background(50);
}

void draw() {
  //background(51);
  fill(127);
  stroke(255);
  strokeWeight(2);
  
  for (int i = 0; i < 6; i++ ) {
    star(100*i + 50, 0);
  }

}


void star(float x, float y) {
  beginShape();
  vertex(x, y);
  vertex(x + 14, y + 30);
  vertex(x + 47, y + 35);
  vertex(x + 23, y + 57);
  vertex(x + 29, y + 90);
  vertex(x, y + 75);
  vertex(x - 29, y + 90);
  vertex(x - 23, y + 57);
  vertex(x - 47, y + 35);
  vertex(x - 14, y + 30);
  endShape(CLOSE);
}

void mousePressed() {
  star(mouseX, mouseY- 45);
}
