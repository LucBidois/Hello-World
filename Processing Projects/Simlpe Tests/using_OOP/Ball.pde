class Ball {
  float x;
  float y;
  float speedX;
  float speedY;
  
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
}
