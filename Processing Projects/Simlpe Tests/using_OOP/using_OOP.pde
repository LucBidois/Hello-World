

void setup() {
  size(300, 400);
}

void draw() {
  background(200);
  bouncing_ball();
}

void bouncing_ball() {
  /*movement, collisions and drawing on screen*/
  Ball.displayBall();
  Ball.moveBall();
  Ball.ballCollisions();
}
