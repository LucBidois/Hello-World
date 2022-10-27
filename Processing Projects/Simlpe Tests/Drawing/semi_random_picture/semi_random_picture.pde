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
  fill(red, green, blue);
  //stroke(int(random(255)));
  
  count = random(0, 300);
  if (0 < count && count < 100 ) {
    red = red + incrementR;
  } if (100 < count && count < 200 ) {
    green = green + incrementG;
  } if (200 < count && count < 300 ) {
    blue = blue + incrementB;
  }
  
  if (red == 255) {
    incrementR = -1;
  } if (green == 255) {
    incrementG = -1;
  } if (blue == 255) {
    incrementB = -1;
  } if (red == 0) {
    incrementR = 1;
  } if (green == 0) {
    incrementG = 1;
  } if (blue == 0) {
    incrementB = 1;
  }

  ellipse(circleX,circleY, 20, 20);
}
