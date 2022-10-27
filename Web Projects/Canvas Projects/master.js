//const Bubble = querySelector(".Bubble")
//const Chaser = querySelector(".Chaser")

//document.write("hello");
//document.getElementById("modMe").value=25;
//document.getElementById("modMe").innerHTML="A new set of text!";

//context.beginPath();
//context.moveTo(10,10);
//context.lineTo(50,25);
//context.stroke();

//context.arc(100,100,25,0,1*Math.PI);

// document.addEventListener("DOMContentLoaded", function() {
//   var canvas = document.getElementById("canvas");
//   var circles = [];
//   var radius = 50;
//   canvas.width = canvas.clientWidth;
//   canvas.height = canvas.clientHeight;
//   var context = canvas.getContext("2d");
// }, false);


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colours = [ '#F46e42', '#41F4BE', '#336DF4', '#b0e0e6', '#ff6767',
                  '#d3f3c8', '#f55b70', '#00ffff', '#b163a3'];

canvas.height = 500;
canvas.width = 500;

let blobList = [];

let collisionCount = 0;

//moving blob objects
// on creation, automatically:
//1. add to an accessible list
//2. randomise positon and colour
//3. ensure position is in screen.
//4. we want bounces to be perpendicular to the collision.
class Blob {
  constructor() {
    this.size = Math.random() * 30 + 5; // 5 to 35 px
    this.xPos = (Math.random() * (canvas.height - 2*this.size) + this.size);
    this.yPos = (Math.random() * (canvas.width - 2*this.size) + this.size);
    this.colour = colours[Math.floor(Math.random() * colours.length)];
    this.xSpeed = (Math.random() - 0.5 ) * 6;
    this.ySpeed = (Math.random() - 0.5 ) * 6;
    // this.mass = Math.random() * 4 + 1; //  1 to 5 kg // could associate with size later
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
        this.xSpeed = - this.xSpeed;
    }
    if (this.yPos + this.size > canvas.height || this.yPos < 0 + this.size) {
        this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
  checkCollisions(){
    for ( let i=0; i<blobList.length; i++) {
      if (this != blobList[i]) {
        let trigX = Math.abs(this.xPos - blobList[i].xPos);
        let trigY = Math.abs(this.yPos - blobList[i].yPos);
        let distance = Math.sqrt(trigX**2 + trigY**2);
        if (distance <= (this.size + blobList[i].size)) {
          // console.log("collision");
          // this.applycollision(angle);

          this.xSpeed = -this.xSpeed;
          this.ySpeed = -this.ySpeed;
          collisionCount += 1;
        }
      }
    }
  }
  reflect(surface) {
   // velocity = Math.sqrt(this.xSpeed**2 + this.ySpeed**2);
   velocity = [this.xSpeed + this.ySpeed];
   velocityDirection = velocity/abs(velocity);
   surfaceNormal = [x, y]; //normal vector to surface hit other ball will hit -surfaceNormal
   //surfaceNormal**2  should be 1
  }
  // applyCollision(){
  // }
}


function tests(){
 console.log(collisionCount);
}

function newBlob() {
  blobList.push(new Blob);
}

function nextFrame() {
  canvas.width = canvas.width; //clears canvas
  for (let i = 0; i < blobList.length; i++) {
    blobList[i].checkCollisions();
    blobList[i].move();
    blobList[i].draw();
  }
}

setInterval(nextFrame, 10);
