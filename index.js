var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var dice1 = 'images\\dice' + randomNumber1 +'.png'; //img 1-6
document.querySelector('img.img1').setAttribute('src', dice1); // changing the dice image

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var dice2 = 'images\\dice' + randomNumber2 +'.png';
document.querySelector('img.img2').setAttribute('src', dice2);

if (dice1 > dice2) {
  document.querySelector('h1').innerHTML='🚩Player 1 Wins';

} else if (dice1 === dice2) {
  document.querySelector('h1').innerHTML='Draw!!';
}
else {
  document.querySelector('h1').innerHTML='Player 2 Wins🚩';
}
