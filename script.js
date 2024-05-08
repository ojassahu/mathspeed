
var operation = 5;

var questions = 1;

var sign = "";
//For page 1

function setop(x) {
  operation = x;
  if (x == 1) {
    d = "Addition";
    sign = "+";
  }
  else if (x == 2) {
    d = "Subtraction";
    sign = "-";
  }
  else if (x == 3) {
    d = "Multiplication";
    sign = "x";
  }
  else if (x == 4) {
    d = "Division";
    sign = "÷";
  }
  else if (x == 5) {
    d = "Random"
  }
  var displayTextAtPage1 = document.getElementById("optext");
  displayTextAtPage1.innerHTML = d;
}
function done() {
  var noofquestionininput = document.getElementById("noq");
  questions = noofquestionininput.value;
  localStorage.setItem("operation", operation);
  localStorage.setItem("questions", questions);
  localStorage.setItem("sign", sign);
}
