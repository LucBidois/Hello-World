var inc = 0.01;
var next = 0;
var zoff = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  
  var yoff = 0;
  
  loadPixels();
  
  for (var x = 0; x < width; x++) {
  var xoff = 0; 
    for (var y = 0; y < height; y++){
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff, zoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += inc;
  //noLoop();
  updatePixels();
}
