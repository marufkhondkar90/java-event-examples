// change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Dhaka';
}

// fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="60px";
}

// color change
function color(){
    document.getElementById("color").style.color="brown";
}
// light off & on
function onLight(){
    document.getElementById("light").src="images/on.png";
}
function offLight(){
    document.getElementById("light").src="images/off.png";
}

// alert
function myAlert(){
    alert("safety first");
}

// alert function
function alertShow(){
    alert("welcome to web");
}

// display hide and block
function displayHide(){
    document.getElementById("tHide").style.display="none";
}
function displayShow(){
    document.getElementById("tHide").style.display="block";
}

// show date
function showDate(){
    document.getElementById("s_date").innerHTML = Date();
}

// repeat
function myRepeat(){
    var store1 = "hello, ";
    document.getElementById("repeat").innerHTML = store1.repeat(5);
}

// total result
function result(){
    document.getElementById("result").innerHTML = 52 + 29;
}

// Addition
var x = 11;
var y = 1;
var z = x + y;
function myAddition(){
    document.getElementById("var_addi").innerHTML = z;
}

// Multiplication
var a = 11;
var b = 10;
var c = a * b;
function myMultiplication(){
    document.getElementById("var_multi").innerHTML = c;
}

// division
var f = 99;
var g = 5;
var h = f / g;
function division(){
    document.getElementById("division").innerHTML = h;
}

// hover over
 document.getElementById('hover').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
  };

  // hover out

   document.getElementById('out').onmouseout = function() {
    this.style.backgroundColor = 'lightblue';
  };