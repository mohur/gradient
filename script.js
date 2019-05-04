//Add value that displays a certain hex code when website first launches

var hexColorOne = document.getElementById("DisplayHexCodeOne");
var hexColorTwo = document.getElementById("DisplayHexCodeTwo");

var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");


function displayHexColorInfo () {
    hexColorOne.textContent = firstColor.value;
    hexColorTwo.textContent = secondColor.value;
}

var body = document.querySelector(".gradient");

function setGradient() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
}

var dropDownMenu = document.querySelector(".dropDownMenu");

function dropDownMenuToggle() {
    dropDownMenu.classList.toggle("show");
}

var colorBoxOne = document.getElementById("displayColorBoxOne")
var colorBoxTwo = document.getElementById("displayColorBoxTwo")

firstColor.addEventListener("input", function() {
    setGradient();
    colorBoxOne.style.background = firstColor.value;
});

secondColor.addEventListener("input", function() {
    setGradient();
    colorBoxTwo.style.background = secondColor.value;
});

var colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", dropDownMenuToggle);