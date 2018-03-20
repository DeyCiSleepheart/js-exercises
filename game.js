//alert("hello!");
//create secret number
var secretNumber = 4;

//ask user for guess
//var guess = prompt("Guess a number");
//alert(guess);

//Check if guess is right
//if (Number(guess) === secretNumber){
//  alert ("You got it right!");
//}
//otherwise
//else if (Number(guess) <= secretNumber){
//  alert("No your guess is too low!")
//}
//else  {
//  alert("No, your guess is too high!")
//}


//else {
// alert("Wrong!");
//}
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//alert(guess);

//Check if guess is right
if (guess === secretNumber){
  alert ("You got it right!");
}
//otherwise
else if (guess <= secretNumber){
  alert("No your guess is too low!")
}
else  {
  alert("No, your guess is too high!")
}
