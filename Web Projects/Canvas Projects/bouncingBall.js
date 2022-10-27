
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colours = [ '#F46e42', '#41F4BE', '#336DF4', '#b0e0e6', '#ff6767',
                  '#d3f3c8', '#f55b70', '#00ffff', '#b163a3'];

canvas.height = 500;
canvas.width = 500;
let blobList = [];

//physics constants
const scale = 5; //pixels per meter
const framerate = 30 // intended frames per second (updates per second)
let updatePerMs = 0.001/framerate // updates ne frame every milliseconds

class Ball {
  constructor() {
    this.size = 20;
    this.xPos = canvas.height/2;
    this.yPos = canvas.width/2;
    this.colour = colours[Math.floor(Math.random() * colours.length)];
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.yAccel = 0.1;
    this.xAccel = 0;
    this.mass = Math.random() * 4 + 1; //  1 to 5 kg // could associate with size later
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.stroke();
  }
  move(){
    if (this.xPos + this.size > canvas.width || this.xPos < 0 + this.size) {
        this.xSpeed = - this.xSpeed * 0.95;
    }
    if (this.yPos + this.size > canvas.height || this.yPos < 0 + this.size) {
        this.ySpeed = - this.ySpeed * 0.95;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
  accelerate(){
   this.xSpeed + this.xAccel;
   this.ySpeed + this.yAccel;
  }
}

function newBlob() {
  blobList.push(new Ball);
}

function nextFrame() {
  canvas.width = canvas.width; //clears canvas
  for (let i = 0; i < blobList.length; i++) {
    blobList[i].accelerate();
    blobList[i].move();
    blobList[i].draw();
  }
}

setInterval(nextFrame, updatePerMs);

//why is ball bouncing higer each bounce?

// TASKS
//
//1. create a reasonable frame to speed ratio.  so that acceleration is not affected by framerate.
//2. use physics equations to bounce ball on floor.
//3. add air resistence so that ball slows down
//4. i suppose we could use framerate as a measurement of time
// v = u + at
// s = ut + (1/2)at^2
// s = (1/2)(u + v)t
// v^2 = u^2 + 2as
// s = vt - (1/2)at^2
// we need constants
//  - scale - to represent distance each pixel represents
//  - framerate - in frame per millisecond, used infer calculate time.

// lets start with scale being 100m for 500 px thats 5 px per m
