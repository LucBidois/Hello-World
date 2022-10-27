//end lines with ;



// alert("Hey Why are you leaving?");

// object.method()  //runs method,
// document.write("Hey there"); //this write directly on the html document - so you can write HTML here


// sends in console, can be seen by pression F12, used for debugging
console.log("logs in console");
console.warn("warn me");
console.error("error has occured");

// note items need to be created before JS can edit it.
document.getElementById("modMe").value = "something else";1

// this allows you to edit other areas of the HTML
document.getElementById("modMe2").innerHTML = "something else";

//to draw, we user canvas
// document.getElementById("myCanvas").getContext("2d").beginPath();
// document.getElementById("myCanvas").getContext("2d").moveTo();

const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");
// const //assignment never changes (the thing can change)
// let //

function blob(xloc, yloc, size, colour){
  context.beginPath(); //do this each time you need to start a drawing
  context.arc(xloc,yloc,size,0,2*Math.PI); //any curved line
  context.fillStyle = colour;
  context.stroke();
  context.fill();

// && //and
// || //or

  if (x >= canvas.width || x <= 0) {
    xChange *= -1;
  }
  if (y >= canvas.height || x <= 0) {
    yChange *= -1;
  }
  x += xChange;
  y += yChange;
}
/*
context.beginPath();
context.moveTo(10,10); // moves without drawing
context.lineTo(50,25); // prepares stroke
context.stroke(); // applies lineTo
//      arc(x, y, size,startingangle, endingangle )
context.arc(100,100,25,0,1*Math.PI); //any curved line
context.stroke();
context.fillStyle = "pink";
context.fill();

blob(100,150,25,"pink"); // circle
*/

let x = 50;
let y = 50;

let xChange = 1;
let yChange = 1.13;

setInterval(function(){
    context.clearRect(0,0,canvas.width,canvas.height);
    blob(x,y,20,"green")
  }, 30); // parameters screw up without the function()
