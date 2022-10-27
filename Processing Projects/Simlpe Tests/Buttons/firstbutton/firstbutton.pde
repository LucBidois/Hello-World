void setup() {
 size(1080, 720);
 background(180);
 
 fill(255, 120, 0);
 
}

void draw() {
  fill(255, 120, 0);
  rect(300, 300, 300, 100);
  
  if ((mouseX > 300) && (mouseX < 600) && (mouseY > 300) && (mouseY< 400)) {
    cursor(HAND); 
    
    fill(255, 200, 100, 0.1);
    rect(300, 300, 300, 100);
  } else {
    cursor(ARROW);
  }
}
