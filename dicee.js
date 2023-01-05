var randomNumber1 = Math.floor(6 * Math.random()) + 1;
firstDice = "dice"+randomNumber1;
document.querySelector(".img1").setAttribute("src", "images/"+firstDice+".png");

var randomNumber2 = Math.floor(6 * Math.random()) + 1;
secondDice = "dice"+randomNumber2;
document.querySelector(".img2").setAttribute("src", "images/"+secondDice+".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
