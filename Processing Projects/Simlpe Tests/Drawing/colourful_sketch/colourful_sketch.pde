float count = 25;
float increment = 1;
float circleX; // initialised with value indicated later. 
float circleY;
int red; 
int green;
int blue;


void setup() {
  size(640, 360);  
  background(50);
}

void draw() {
  circleX = random(width);
  circleY = random(height);
  fill(red, green, blue);
  //stroke(int(random(255)));
  red = red + 5;
  
  if (red == 255) {
    red = 0;
    green = green + 5;
  } if (green == 255) {
    green = 0;
    blue = blue + 5;
  } if (blue == 255) {
    blue = 0;
    red = 0;
    green = 0;
  }


  ellipse(circleX,circleY, 20, 20);
}
