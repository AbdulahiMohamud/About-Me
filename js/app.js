'use strict';

let userName = prompt('Thanks for visting my, can i have your name please.');
let score = 0;

alert(`Welcome ${userName} to my website about me, i hope you enjoy it!`);

// Questain One
let answerOne = prompt('Im I tall?').toUpperCase();

if(answerOne === 'Y' || answerOne === 'YES'){
  score++;
  //console.log('Youre right!');
  alert('Youre right!');

} else if(answerOne === 'N' || answerOne === 'NO'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');

}
// questaion two
let answerTwo = prompt('Do i have a PHD').toUpperCase();

if(answerTwo === 'Y' || answerTwo === 'YES'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');

} else if(answerTwo === 'N' || answerTwo === 'NO'){
  //console.log('Youre right!');
  alert('Youre right!');
  score++;

}
// Questain three
let answerThree = prompt('Is my name Abdulahi?').toUpperCase();

if(answerThree === 'Y' || answerThree === 'YES'){
  //console.log('Youre right!');
  alert('Youre right!');
  score++;

} else if(answerThree === 'N' || answerThree === 'NO'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');

}
// Questain Four
let answerFour = prompt('Is 201 fun?').toUpperCase();

if(answerFour === 'Y' || answerFour === 'YES'){
  //console.log('Youre right!');
  alert('Youre right!');
  score++;

} else if(answerFour === 'N' || answerFour === 'NO'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');

}
// questaion five
let answerFive = prompt('Do i have a son?').toUpperCase();

if(answerFive === 'Y' || answerFive === 'YES'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');

} else if(answerFive === 'N' || answerFive === 'NO'){
  //console.log('Youre right!');
  alert('Youre right!');
  score++;

}

alert(`${userName} thank you for anwsering the questains !`);

// questain six

let userGuess = prompt('Enter a number between 1 & 10');
let rightAnswer = 5;
let tries = 3;

for (let i = 0; i < tries; i++) {
  while (~~userGuess < 1 || ~~userGuess > 10) {
    userGuess = prompt('Please enter a number between 1 & 10');
  }
  if (~~userGuess === rightAnswer) {
    alert('WINNER WINNER CHICKEN DINNER (unless ur vegan)');
    score++;
    break;
  } else if (~~userGuess < rightAnswer){
    userGuess = prompt('WRONG THE NUMBER IS HIGHER');

  } else if (~~userGuess > rightAnswer) {
    userGuess = prompt('WRONG THE NUMBER IS LOWER');
  }
  if (i === 2) {
    alert(`Sorry you failed, the right answer was ${rightAnswer} !`);
  }
}

// questain Seven

let myFavColors = ['orange','indigo','cyan','khaki'];
let correct = false;
let answer = null;
for (let i = 0; i < 6; i++) {
  let colorAnsw = prompt('Can you guess my favorite color ?').toLowerCase();

  for (let j = 0; j < myFavColors.length; j++){
    if (colorAnsw === myFavColors[j]) {
      correct = true;
      score++;
      i = 6;
      answer = colorAnsw;
    }
  }
  
}
if (!correct){
  alert('you are wrong');

}else {
  alert(`you are right my favorite color is ${answer}`);

}
alert(`My favorite colors are ${myFavColors}`);
alert(`Your score is ${score} out of 7 !`);



