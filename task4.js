function myFunction() {

    var background = document.getElementById("square1").style.backgroundColor;
    if (background == "red") {
        document.getElementById("square1").style.background = "green";
    } else {
        document.getElementById("square1").style.background = "red";
    }

  
  var text = document.getElementById("button").firstChild;
   text.data = text.data == "make green" ? "make red" : "make green";
}