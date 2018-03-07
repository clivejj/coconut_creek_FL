console.log("test");

var svg = document.getElementById("box");
var clearButton = document.getElementById("clear");

function drawCircle(e) {
    console.log("drawing circle");
    x = e.offsetX.toString();
    y = e.offsetY.toString();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("fill", "black");
    circle.setAttribute("r", "20");
    box.appendChild(circle);
    circle.addEventListener('click', changeColor);
}

box.addEventListener('click', drawCircle);

function changeColor(e) {
    e.stopPropagation();
    console.log("changing color");
    this.setAttribute("fill", "red");
    this.removeEventListener("click", changeColor);
    this.addEventListener("click", erase);
}


function erase(e) {
    e.stopPropagation();
    console.log("erasing");
    this.removeEventListener("click", erase);
    box.removeChild(this);
}


function clear(e) {
    box.innerHTML = "";
}

clearButton.addEventListener('click', clear);

