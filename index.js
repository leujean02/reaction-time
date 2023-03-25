var box = document.querySelector(".test-box");
var bigText = document.querySelector(".big");
var smallText = document.querySelector(".small");

var clicked = false;

var timer;

var startTime;

function start() {
    if (clicked) {
        var endTime = Date.now();
        clearTimeout(timer);
        result(endTime);
        clicked = !clicked;
    } else {
        clicked = !clicked;
        waiting();
        timer = setTimeout (click, Math.floor(Math.random() * 6000) + 2000);
    }
}

function waiting() {
    box.style.backgroundColor = "#90C8AC";
    bigText.innerHTML = "Wait for it...";
    smallText.style.visibility = "hidden";
}

function result(endTime) {
    console.log(box.style.backgroundColor);
    if (box.style.backgroundColor == "rgb(144, 200, 172)") {
        box.style.backgroundColor = "#354259"
        bigText.innerHTML = "Not Yet";
    } else {
        box.style.backgroundColor = "#525E75"
        var yourTime = endTime - startTime;
        bigText.innerHTML = yourTime + " ms";
    }
    smallText.style.visibility = "visible";
    smallText.innerHTML = "Click to restart.";
}

function click() {
    box.style.backgroundColor = "#ff7878";
    bigText.innerHTML = "CLICK!";
    startTime = Date.now();
}