var inc = 0.02;
var zoff = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  noiseDetail(8,0.5);
}

function draw() {
  
  var yoff = 0;
  
  loadPixels();
  
  for (var x = 0; x < width; x++) {
  var xoff = 0; 
    for (var y = 0; y < height; y++){
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff, zoff) * 255;
      var g = noise(xoff+1000, yoff+1000, zoff+1000)*255;
      var b = noise(xoff+2000, yoff+2000, zoff+2000)*255;
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += inc;
  //noLoop();
  updatePixels();
}
