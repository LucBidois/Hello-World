void setup() {
  size(600, 500);
  stroke(0, 0);
}

void draw() {
  background(0);
  
  for (int y = 0; y< height; y = y + 10) {
    for (int x = 0; x < width; x = x + 10) {
      
      fill(dist(x, y, mouseX, mouseY)*2);
      rect(x, y, 20, 20);
    }
  }
}
