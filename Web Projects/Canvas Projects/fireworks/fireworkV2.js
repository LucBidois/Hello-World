const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

let drawnItemsList = [];  // holds lists of objects to be drawn [list,list,list]
///////////////////////////////do not edit above here///////////////////////////
const colours = [ '#F46e42', '#41F4BE', '#336DF4', '#b0e0e6', '#ff6767',
                  '#d3f3c8', '#f55b70', '#00ffff', '#b163a3'];
let iCount = 0;
let fireworkCount = 50000;

class Firework {
  constructor({size = 2,
              colour = colours[Math.floor(Math.random() * colours.length)],
              lifetime = 150,
              xVel = ((Math.random() - 0.5) * 3),
              trailColours = 'random',
              explosionColours = 'random'}) {
    this.xPos = canvas.width / 2 ; // positioned in middle of canvas
    this.yPos = canvas.height ;
    this.size = size ;
    this.colour = colour;
    this.lifeTime = lifetime;
    this.xVel = xVel;
    this.trailColours = trailColours;
    this.explosionColours = explosionColours;

  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.strokeStyle = this.colour;
    ctx.fill();
    ctx.stroke();
  }

  move(){
    this.xPos += this.xVel;
    this.yPos -= 2;
    this.lifeTime--;
    if (this.lifeTime % 2 === 0) {
      this.createTrail();
    }
  }

  applyFrame(){
    this.move();
    this.draw();
    if (this.lifeTime === 1) {
      this.explode();
    }
  }

  createTrail(){
    if (this.trailColours === 'random') {
      drawnItemsList.push(new Particles(this.xPos, this.yPos, 'down', 30, colours[Math.floor(Math.random() * colours.length)]));
    } else {
      for (let i = 0; i < this.trailColours.length; i++) {
        drawnItemsList.push(new Particles(this.xPos, this.yPos, 'down', 30, this.trailColours[Math.floor(Math.random() * this.trailColours.length)]));
      }
    }
  }

  explode() {
    if (this.explosionColours === 'random') {
      for (let i = 0; i < 500; i++) {
        drawnItemsList.push(new Particles(this.xPos, this.yPos, 'random', 70, colours[Math.floor(Math.random() * colours.length)]));
      }
    } else {
      for (let i = 0; i < 500; i++) {
        drawnItemsList.push(new Particles(this.xPos, this.yPos, 'random', (Math.random() * 40) + 30, this.explosionColours[Math.floor(Math.random() * this.explosionColours.length)]));
      }
    }
  }

}

class Particles {
  constructor(xPos,yPos,direction,lifeTime, colour){
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = 0.2;
    this.lifeTime = lifeTime;
    this.colour = colour;
    if (direction === 'down') {
      this.rVel = 0.5 + Math.random() * 1 ;     // random power range
      this.angle = Math.PI / 2 + (Math.random() - 0.5) * 0.2; // random angle downwards
    } else if (direction === 'random') {
      this.rVel = (Math.random() - 0.5) * 3 ;
      this.angle = (Math.random() - 0.5) * 2 * Math.PI ;
    }
    this.xVel = this.rVel * Math.cos(this.angle);
    this.yVel = this.rVel * Math.sin(this.angle);
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.xPos,this.yPos,this.size,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.strokeStyle = this.colour;
    ctx.fill();
    ctx.stroke();
  }

  move(){
    this.xPos += this.xVel;
    this.yPos += this.yVel;
    this.lifeTime--;
  }

  applyFrame(){
    this.move();
    this.draw();
  }
}

/////////////////////below directly interacts with HTML/////////////////////////

function newFirework() {
  drawnItemsList.push(new Firework({}));
}


function newFireworkIce() {
  drawnItemsList.push(new Firework({colour : 'lightblue',
                                    lifetime : Math.floor(Math.random() * 50) + 125,
                                    trailColours : ['lightblue', 'blue', '#A5F2F3'],
                                    explosionColours : ['blue', 'lightblue', '#A5F2F3'] } ))
}

function newFireworkFire() {
  drawnItemsList.push(new Firework({colour : 'orange',
                                    lifetime : Math.floor(Math.random() * 50) + 125,
                                    trailColours : ['orange', 'red', 'yellow'],
                                    explosionColours : ['orange', 'red', 'yellow'] } ))
}

// let arcCount = 0;

 function fireworkArk() { // laggy
   arcCount = 300;
   fireworkCount = 15;
 }


////////////////////////////// end of buttons //////////////////////////////////

//lots of fireworks cause lag,
//what if i staggered the drawing or changed the frame rate when I notice a drop?

function nextFrame() {
  canvas.width = canvas.width; //clears canvas
  for (let i = 0; i < drawnItemsList.length; i++) {
    drawnItemsList[i].applyFrame();

    if (drawnItemsList[i].lifeTime < 0 ) { // removing objects
      drawnItemsList.splice(i,1);
      i--;
    }
  }

  if (typeof arcCount !== "number"){
    return;
  }

  if (fireworkCount > 0 && arcCount % 20 === 0) {
    if (fireworkCount % 2 === 0) {
      drawnItemsList.push(new Firework({colour : 'lightblue',
                                        lifetime : Math.floor(Math.random() * 50) + 125,
                                        trailColours : ['lightblue', 'blue', '#A5F2F3'],
                                        explosionColours : ['blue', 'lightblue', '#A5F2F3'],
                                        xVel :  (-1.5 + (0.2 * (15 - fireworkCount))) } ))
    }
    else {
      drawnItemsList.push(new Firework({colour : 'orange',
                                        lifetime : Math.floor(Math.random() * 50) + 125,
                                        trailColours : ['orange', 'red', 'yellow'],
                                        explosionColours : ['orange', 'red', 'yellow'],
                                        xVel : (-1.5 + (0.2 * (15 - fireworkCount))) } ))
    }

   fireworkCount-- ;
  }

  arcCount-- ;
  // iCount++;
  // if (iCount === 20) {
  //   newFirework();
  //   console.log(drawnItemsList.length)
  //   iCount = 0;
  // }

  // newFirework( )
}

setInterval(nextFrame, 10);
