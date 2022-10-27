/* this is how to write a function
returnType name(args) {

}

"void" returntype does not return anything, they perform a task
*/

float x = 50;
float y = 50;
float xspeed = 2;
float yspeed = 1;


void setup() {
  size(300, 400);
}

void draw() {
  background(200);
  bouncing_ball();
  flower(100, 100);
}

void flower(int x, int y) {
  fill(255, 0, 0);
  ellipse(x, y, 20, 20);
}

void bouncing_ball() {
  /*movement, collisions and drawing on screen*/
  displayBall();
  moveBall();
  ballCollisions();
}

void displayBall() {
  stroke(0);
  fill(127);
  ellipse(x, y, 32, 32);
}

void moveBall() {
  x = x + xspeed;
  y = y + yspeed;
}

void ballCollisions() {
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed  = yspeed * -1;
  }
}
