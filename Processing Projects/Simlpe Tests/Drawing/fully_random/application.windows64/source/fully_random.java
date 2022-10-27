import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class fully_random extends PApplet {

float count = 25;
float incrementR = 1;
float incrementG = 1;
float incrementB = 1;
float circleX; // initialised with value indicated later. 
float circleY;
float red; 
float green;
float blue;

public void setup() {
    
  background(50);
  stroke(0, 0);
}

public void draw() {
  circleX = random(width);
  circleY = random(height);
  fill(random(0, 255), random(0, 255), random(0, 255));
  //stroke(int(random(255)));

  ellipse(circleX,circleY, random(5, 20), random(5, 20));
}
  public void settings() {  size(640, 360); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "fully_random" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
