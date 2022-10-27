float count = 25;
float increment = 1;

void setup() {
  size(640, 360);
}

void draw() {
  background(50);
  fill(150);
  stroke(255);
  //rectMode(CENTER);
  //rect(width-mouseX, height-mouseY, 100, 50);
  //line(pmouseX, pmouseY, mouseX, mouseY);
  if(count > 360-25 && increment > 0) {
    increment = -increment;
  } else if (count < 0 + 25) {
    increment =-increment;
  }
  count = count + increment;
  ellipse(300,count, 50, 50);
}

void mousePressed() { //Runs once when mouse is pressed
  count = 25;
  background(50);
}

void keyPressed() {
  background(100, 100, 0);
}
