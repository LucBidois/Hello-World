//getContext('2d'); notes
//https://devdocs.io/dom/canvasrenderingcontext2d

//drawing rectangles
clearRect(x,y,width,height);
fillRect(x,y,width,height);
strokeRect(x,y,w,h);


//drawing text
fillText();
strokeText();
measureText();

//Line styles
lineWidth //default = 1.0
lineCap //default = butt, round, square
linejoin //round, bevel, miter (default)
miterLimit //10
getLineDash();
setLineDash();
lineDashOffSet

//text styles
font
textAlign
textBaseline
direction

//fill and stoke styles
fillStyle
strokeStyle

//Gradients and patterns
createLinearGradient()
createRadialGradient()
createPattern()

//Shadows
shadowBlur
shadowColour
shadowOffsetX
shadowOffsetY

//Paths
beginPath()
closePath()
moveTo()
lineTo()
bezierCurveTo()
quadraticCurveTo()
arc()
arcTo()
ellipse()
rect()

//drawing paths
fill()
stroke()
drawFocusIfNeeded()
scrollPathIntoView()
clip()
isPointInPath()
isPointInStroke()

//Transformations
currentTransform
rotate()
scale()
translate()
transform()
setTransform()
resetTransform()

//Composting
globalAlpha
globalCompositeOperation

//Drawing Images
drawImage()

//Pixel manipulation (see ImageData object)
createImageData()
getImageDate()
putImageDate()

//Image smoothing
imageSmoothingEnabled
imageSmoothingQuality

//The canvas state
save()
restore()
canvas()

//hit regions
addHitRegion()
removeHitRegion()
clearHitRegions()

//Experimental API's
filter
