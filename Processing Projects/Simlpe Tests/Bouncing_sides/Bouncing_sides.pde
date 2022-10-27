float x;
float y;
float radius = 15;
float xspeed = 6;
float yspeed = 5;

void setup () {
  size(1080, 720);
  fill(100);
  y = height/2;
  x = radius;
}

void draw() {
  background(200);
  stroke(150);
  
  if ((x >= width-radius) || (x < radius)) {
    xspeed = xspeed*-1;
    //radius = radius + 1;
    fill(random(0, 255), random(0, 255), random(0, 255));
  } if ((y >= height-radius) || (y < radius)) {
    yspeed = yspeed*-1;
    //radius = radius + 1;
    fill(random(0, 255), random(0, 255), random(0, 255));
}
  
  x = x + xspeed;
  y = y + yspeed;
  
  ellipse(x, y, radius*2, radius*2);
}
