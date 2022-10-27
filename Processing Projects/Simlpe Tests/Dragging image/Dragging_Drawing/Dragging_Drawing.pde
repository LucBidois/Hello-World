float OriginX = 0;
float OriginY = 0;

void setup() {
  size(1080, 720);
  background(100);
  
  fill(255, 100, 0);
  stroke(0, 100, 255);
  //cursor(HAND);
}

void draw() {
  background(100);
  rect(10 + OriginX, 10 + OriginY, 50, 50);
  ellipse(200 + OriginX, 200 + OriginY, 30, 30);
}


void mouseDragged() {
  OriginX = OriginX + (mouseX - pmouseX);
  OriginY = OriginY + (mouseY - pmouseY);
}

void mouseMoved() {
  line(OriginX, OriginY, mouseX, mouseY);  
}

void mouseClicked() { // this is only when the mouse is clicked (no movement or anything)
  fill(random(0, 255), random(0, 255), random(0, 255));
}

void mousePressed() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
}
