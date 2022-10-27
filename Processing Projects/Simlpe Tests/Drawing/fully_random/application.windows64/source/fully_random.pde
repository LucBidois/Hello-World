float count = 25;
float incrementR = 1;
float incrementG = 1;
float incrementB = 1;
float circleX; // initialised with value indicated later. 
float circleY;
float red; 
float green;
float blue;

void setup() {
  size(640, 360);  
  background(50);
  stroke(0, 0);
}

void draw() {
  circleX = random(width);
  circleY = random(height);
  fill(random(0, 255), random(0, 255), random(0, 255));
  //stroke(int(random(255)));

  ellipse(circleX,circleY, random(5, 20), random(5, 20));
}
