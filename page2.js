let num1 = 0;
let num2 = 0;
let l = 10;
let solution = 0;

let questions = localStorage.getItem("questions");
let sign = localStorage.getItem("sign");
let operation = localStorage.getItem("operation");

var qn = document.getElementById("qn");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var meme = document.getElementById("banner");
var no1 = document.getElementById("a");
var no2 = document.getElementById("b");
var symbol = document.getElementById("op");
var input = document.getElementById("inputbox");
var submit = document.getElementById("ok");
var qa = document.getElementById("qa");
var com = document.getElementById("com");
var pagedivide = document.getElementById("pagedivide");
var millisecond = document.getElementById("mil");

let clockstart = false;
let ans = 0;
let i = 1;
let wrongans = 0;
let point = 0;
let timer = null;
let starttime = 0;

input.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    ansgiven();
  }
});


submit.addEventListener('click', function() {
  ansgiven();
});

function ansgiven() {
  ans = parseInt(input.value);
  var createli = document.createElement("li");
  if (ans === solution) {
    point++;
    createli.innerHTML = num1 + sign + num2 + "=" + ans + " <font color='green'> &#10004;</font> " + " time taken -" + (minute.innerText) + ":" + (second.innerText);;
    qa.append(createli);
  }
  else {
    wrongans++;
    var heart = document.getElementById("heart" + wrongans);
    createli.innerHTML = num1 + sign + num2 + "=" + ans + " <font color='red'>x</font> " + " time taken -" + (minute.innerText) + ":" + (second.innerText);
    qa.appendChild(createli);
    heart.style.backgroundImage = "url('broken.png')";

  }
  if (i < questions && wrongans < 3) {
    i++;
    checker();

  } else if (wrongans == 3) {
    overmeme(1);

  }
  else {
    overmeme(2);
  }
}
function updateUI() {
  qn.innerHTML = "Question no.  " + i;
  no1.innerHTML = num1;
  no2.innerHTML = num2;
  symbol.innerHTML = sign;

  input.value = "";
  input.focus();
  startclock();
}
function random() {
  let w = parseInt(Math.random() * 10);
  if (w <= 4) {
    solution = num1 + num2;
    sign = "+";
  }
  else if (w <= 6) {
    solution = num1 - num2;
    sign = "-";
  }
  else if (w <= 8) {
    solution = num1 * num2;
    sign = "x";
  }
  else if (w <= 10) {
    solution = num1 / num2;
    sign = "÷";
  }
}
function no() {
  num1 = parseInt(Math.random() * l);
  num2 = parseInt(Math.random() * l);
}

function gen() {
  if (operation == 1) {
    solution = num1 + num2;
  }
  else if (operation == 2) {
    solution = num1 - num2;
  } else if (operation == 3) {
    solution = num1 * num2;
  }
  else if (operation == 4) {
    solution = num1 / num2;
  }
}
function checker() {
  no();
  if (operation == 5) {
    random();
  }
  else {
    gen();
  }
  updateUI();
}
function overmeme(r) {
  if (r == 1) {
    meme.style.backgroundImage = "url('overmeme.png')";
  }
  else if (r == 2) {
    meme.style.backgroundImage = "url('winmeme.png')";

  }
  pagedivide.style.display = "none";
  com.style.display = "block";
}

function startclock() {
  starttime = Date.now();
  timer = setInterval(updateclock, 10);

}
function updateclock() {
  const currenttime = Date.now();
  t = currenttime - starttime;
  let min = Math.floor(t / 1000 * 60);
  let sec = Math.floor((t / 1000) % 60);
  let milli = Math.floor(t % 1000 / 10);
  minute.innerhtml = min;
  second.innerHTML = sec;
  millisecond.innerHTML = milli;
}

checker();



