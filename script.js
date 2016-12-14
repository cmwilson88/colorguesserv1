var colors = [];
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var resetButton = document.querySelector('#resetButton');
var gameOptions = document.getElementsByClassName('gameOption');
var hardRow = document.querySelector('.hardRow');
var difficulty = document.querySelector('#difficulty');
var displayGoal = document.querySelector('.displayGoal');
var header = document.querySelector(".header1");
var winningColor;
var easy = false;

var test = document.querySelector("#test");

function randRGBValue() {
  return Math.floor(Math.random()*255);
}

function randIndex(arr) {
  return Math.floor(Math.random()*arr.length);
}


function generateRGB() {
  var color = 'rgb(';
  color += randRGBValue() + ', ';
  color += randRGBValue() + ', ';
  color += randRGBValue() + ')';
  return color;
}

function visible() {
	for (var i=0; i< gameOptions.length; i++){
		if (gameOptions[i].classList.contains('invisible')) {
			gameOptions[i].classList.remove('invisible');
		}
	}
}

function displayWin() {
	visible();
	for (var i = 0; i < gameOptions.length; i++) {
		gameOptions[i].style.backgroundColor = winningColor;
	}
	header.style.backgroundColor = winningColor;

}

function fillColors() {
  colors = [];
  visible();
  for (var i = 0; i < gameOptions.length; i++) {
    var color = generateRGB();
    gameOptions[i].style.background = color;
    colors.push(color);
  }
  winningColor = colors[randIndex(colors)];
  displayGoal.textContent = winningColor;
}

function guessColor (){
    for (var i=0;i< gameOptions.length;i++){
        gameOptions[i].addEventListener("click", function(){
        	console.log(this.style.backgroundColor);
        	if (this.style.backgroundColor === winningColor) {
        		console.log("You Win");
        		displayWin();
        	} else {
        		console.log("Try again");
        		this.classList.add("invisible");
        	}
        })
    }
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
guessColor();
