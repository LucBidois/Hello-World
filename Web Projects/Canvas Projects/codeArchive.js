//code archive delimited by
//******************************************************************************
// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
// }
//
// function draw(evt) {
//     var pos = getMousePos(canvas, evt);
//     context.fillStyle = "#000000";
//     context.fillRect (pos.x, pos.y, 4, 4);
// }
//******************************************************************************
//simple blob creating functions
function blob(xPos,yPos,radius,color) {
 // displaying a bubble on screen
    ctx.beginPath();
    ctx.arc(xPos,yPos,radius,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}
function drawRandomBlob() {
 //initialising bubble parameters
   let xPos = Math.random() * canvas.height;
   let yPos = Math.random() * canvas.width;
   let colour = colours[Math.floor(Math.random() * colours.length)];
   let size = 5 + (Math.random() * 20 );
   blob(xPos,yPos,size,colour);
}

//creates new blobs automatically
setInterval( drawRandomBlob , 3000);

//******************************************************************************
// working blob class, moving in canavs
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colours = [ '#F46e42', '#41F4BE', '#336DF4'];

canvas.height = 500;
canvas.width = 500;

let blobList = [];

//moving blob objects
// on creation, automatically:
//1. add to an accessible list
//2. randomise positon and colour
class Blob {
    constructor() {
     this.xPos = Math.random() * canvas.height;
     this.yPos = Math.random() * canvas.width;
     this.colour = colours[Math.floor(Math.random() * colours.length)];
     this.xSpeed = (Math.random() - 0.5) * 1;
     this.ySpeed = (Math.random() - 0.5) * 1;
     this.size = Math.random() * 30
    }

    draw(){
     ctx.beginPath();
     ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
     ctx.fillStyle = this.colour;
     ctx.fill();
     ctx.stroke();
    }
    move(){
     this.xPos += this.xSpeed;
     this.yPos += this.ySpeed;
    }
}

function newBlob() {
    blobList.push(new Blob);
}

function nextFrame() {
    canvas.width = canvas.width; //clears canvas
    for (let i = 0; i < blobList.length; i++) {
        blobList[i].move();
        blobList[i].draw();
    }
}

setInterval(nextFrame, 10);
//******************************************************************************
// as above with collisions
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colours = [ '#F46e42', '#41F4BE', '#336DF4'];

canvas.height = 500;
canvas.width = 500;

let blobList = [];

//moving blob objects
// on creation, automatically:
//1. add to an accessible list
//2. randomise positon and colour
//3. ensure position is in screen.
class Blob {
    constructor() {
     this.size = Math.random() * 30
     this.xPos = (Math.random() * (canvas.height - 2*this.size) + this.size);
     this.yPos = (Math.random() * (canvas.width - 2*this.size) + this.size);
     this.colour = colours[Math.floor(Math.random() * colours.length)];
     this.xSpeed = (Math.random() - 0.5) * 1;
     this.ySpeed = (Math.random() - 0.5) * 1;
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
}

function newBlob() {
    blobList.push(new Blob);
}

function nextFrame() {
    canvas.width = canvas.width; //clears canvas
    for (let i = 0; i < blobList.length; i++) {
        blobList[i].move();
        blobList[i].draw();
    }
}

setInterval(nextFrame, 10);
//******************************************************************************
//blobs collide with each other.
