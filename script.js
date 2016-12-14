var colors = [];
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var resetButton = document.querySelector('#resetButton');
var gameOptions = document.getElementsByClassName('gameOption');
var hardRow = document.querySelector('.hardRow');
var difficulty = document.querySelector('#difficulty');
var displayGoal = document.querySelector('.displayGoal');
var winningColor;
var easy = false;

function randRGBValue() {
  return Math.floor(Math.random()*255);
}

function randIndex(arr) {
  return Math.floor(Math.random()*arr.length);
}

function generateRGB() {
  var color = 'rgb(';
  color += randRGBValue() + ',';
  color += randRGBValue() + ',';
  color += randRGBValue() + ')';
  return color;
}

function fillColors() {
  colors = [];
  for (var i = 0; i < gameOptions.length; i++) {
    var color = generateRGB();
    gameOptions[i].style.background = color;
    colors.push(color);
  }
  winningColor = colors[randIndex(colors)];
  displayGoal.textContent = winningColor;
}

function checkClicked() {
	console.log("clicked!");
}

  
resetButton.addEventListener("click", fillColors);
easyButton.addEventListener("click", function(){
  if (easy === false) {
    difficulty.removeChild(hardRow);
    easy = true;
    fillColors();
  }
});

hardButton.addEventListener("click", function(){
  if (easy === true) {
    difficulty.appendChild(hardRow);
    easy = false;
    fillColors();
  }
});



fillColors();
