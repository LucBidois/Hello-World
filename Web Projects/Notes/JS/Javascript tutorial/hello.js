
const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");

class Blob {
  constructor(colour, size) { // runs when object is created
    //these are the attributes (they discribe the object)
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.colour = colour;
    this.size = size;
    this.xChange = 1;
    this.yChange = 1;
  }
  move(){
    if (this.x >= canvas.width || this.x <= 0) {
      this.xChange *= -1;
    }
    if (this.y >= canvas.height || this.y <= 0) {
      this.yChange *= -1;
    }
    this.x += this.xChange;
    this.y += this.yChange;
  }
  draw(){
    context.beginPath();
    context.arc(this.x,this.y,this.size,0,2*Math.PI);
    context.fillStyle = this.colour;
    context.fill();
    context.stroke();
  }
}

function clearImage(){
  context.clearRect(0,0,canvas.width,canvas.height);
}


const newBlob = new Blob("green", 25);
newBlob.Draw();
