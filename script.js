var colors = [];
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var resetButton = document.querySelector('#resetButton');
var gameOptions = document.getElementsByClassName('gameOption');
var hardRow = document.querySelector('.hardRow');
var difficulty = document.querySelector('#difficulty');
var displayGoal = document.querySelector('.displayGoal');
var header = document.querySelector(".header1");
var userMessage = document.querySelector(".userMessage");
var bg = 'backgroundColor';
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
  color += randRGBValue() + ', ';
  color += randRGBValue() + ', ';
  color += randRGBValue() + ')';
  return color;
}

function visible(arr) {
	for (var i=0; i < arr.length; i++){
		if (arr[i].classList.contains('invisible')) {
			arr[i].classList.remove('invisible');
		}
	}
}

function displayWin(arr) {
	visible(arr);
	for (var i = 0; i < arr.length; i++) {
		arr[i].style[bg] = winningColor;
	}
	header.style[bg] = winningColor;

}

function fillColors(arr) {
  colors = [];
  visible(arr);
  header.style[bg] = "lightblue";
  for (var i = 0; i < arr.length; i++) {
    var color = generateRGB();
    arr[i].style[bg] = color;
    colors.push(color);
  }
  winningColor = colors[randIndex(colors)];
  displayGoal.textContent = winningColor;
  userMessage.textContent = "Choose a tile to guess the color!";;
}

function guessColor (arr){
    for (var i=0;i< arr.length;i++){
        arr[i].addEventListener("click", function(){
        	if (this.style[bg] === winningColor) {
        		displayWin(arr);
            userMessage.textContent = 'You won!';
        	} else {
        		this.classList.add("invisible");
            userMessage.textContent = "Try again!";
        	}
        })
    }
}



  
resetButton.addEventListener("click", function() {
  fillColors(gameOptions);
});
easyButton.addEventListener("click", function(){
  if (easy === false) {
    difficulty.removeChild(hardRow);
    easy = true;
    fillColors(gameOptions);
  }
});

hardButton.addEventListener("click", function(){
  if (easy === true) {
    difficulty.appendChild(hardRow);
    easy = false;
    fillColors(gameOptions);
  }
});


fillColors(gameOptions);
guessColor(gameOptions);
