
function base(){
  document.getElementById("base").style.display = "block";
  document.getElementById("window2").style.display  = "none";
  document.getElementById("window3").style.display = "none";
  document.getElementById("window1").style.display = "none";
}

function change1(){
  document.getElementById("base").style.display = "none";
  document.getElementById("window2").style.display  = "none";
  document.getElementById("window3").style.display = "none";
  document.getElementById("window1").style.display = "block";
}

function change2(){
  document.getElementById("base").style.display = "none";
  document.getElementById("window2").style.display  = "block";
  document.getElementById("window3").style.display = "none";
  document.getElementById("window1").style.display = "none";

}

function change3(){
  document.getElementById("base").style.display = "none";
  document.getElementById("window2").style.display  = "none";
  document.getElementById("window3").style.display = "block";
  document.getElementById("window1").style.display = "none";
}
