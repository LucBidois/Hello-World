// changes all tags "p" to "Hi there"
function run() {
  var arr = document.getElementsByTagName("p");
  for (var x = 0; x < arr.length; x++) {
    arr[x].innerHTML = "Hi there";
  }
}

function specific() {
  var text = document.getElementById('p4'); // selects the HTML Elements with ID "p4"
  var user = prompt("what would you like to change in line 4?");
  var well = confirm("are you sure you wish to write \""+ user + "\" ?");
  if (well == true) {
    text.innerHTML = user;  // selects text in the html element and changes it to the text that "user" now has
  }
  else {
    text.innerHTML = text.innerHTML;
  }
}
