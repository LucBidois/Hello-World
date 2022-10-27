/*steps for construction

1. get working particle moving upwards
2. particle stops existing at defined time
3. particle moves at random angle
4. particle releases small particles (fuel)
5. explosion function

*/


colourList = ['green', 'blue', 'red', 'purple', 'pink', 'yellow'];
backgroundColour = 'gray';

xFriction = 0.8;
pulldown = 1;

class Firework {
  constructor(){
   this.trailColours = ['lightgray', 'white'];
   // this.xPos = (canvas.width/2) + (Math.random()-0.5)*20;
   this.size
   this.colour = blue;
   this.xPos = canvas.width/2 + this.size;
   this.yPos = canvas.height; //start on ground
   // this.trailType = ''; // when I have a basic firework type I can work on others
   this.particleColours = colourList;
   // this.trajectory = (Math.random() - 0.5) * 90  //angle 0 === vertical
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
  //
  // shootingUp() {
  //   this.makeMove();
  //   this.releaseParticles(Math.ceil(Math.random()*5));
  //  this.trailColours
  // }
  //
  // explosion() {
  //   //activation of the main explosion
  // }
  //
  // releaseParticles(number) {
  //   for (let i = 0; i < number; i++) {
  //     this.particles.append(new Particle('lightgray', 3, 3, this.xPos, this.yPos));
  //   }
  //
  // }
}

class Particle {
  /*
  fixed colour
  slow down velocity
  slight downward accel - till stop
  disappear

  xpos
  ypos
  xVel
  yVel
  size should be fixed?
  lifeline - depicts frames of existence
  */
  constructor(colour, speed, size, xPos, yPos){
     this.colour = colour;
     this.size = size;
     this.velocity = (Math.random() - 0.5) * speed;
     this.lifeline = 50 + Math.random() * 100; // disapears when reaches 0
     this.xPos = xPos;
     this.yPos = yPos;
  }
  draw(){
    //display particle on screen
    ctx.beginPath();
    ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.fill();
    // ctx.stroke();
  }
  move(){
    this.lifeline -= 1;
    if (this.lifeline < 0) {
     this.remove(); //deleting the object by removing all references
    }
  }
  disolve(){
    //slowly unbrighten colour till it is dark. match with lifeline number.
  }
  remove(){
   // /An object will automatically be deleted when all the references on it are removed.
    delete this.colour;
    delete this.size;
    delete this.velocity;
    delete this.lifeline;
    delete this.xPos;
    delete this.yPos;
  }

}


function newFirework(){
  //creates new firewrork upon activation
  fireworksList.append(new Firework);
}

function nextFrame(){
  //activates all objects still referencable.
  for (let i = 0; i < fireworksList.length; i++){
    //runs single frame action for all fireworks
    fireworksList[i].draw();
    fireworksList[i].move(); //move deletes reference so keep last.
  }
}

/*
trajectoru will always start from same spot
move upwards at constant speed till boom
*/



setInterval(nextFrame, 10);
