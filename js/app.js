'use strict';

let userName = prompt('Thanks for visting my, can i have your name please.');

alert(`Welcome ${userName} to my website about me, i hope you enjoy it!`);

// Questain One
let answerOne = prompt('Im I tall?').toUpperCase();

if(answerOne === 'Y' || answerOne === 'YES'){

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

}
// Questain three
let answerThree = prompt('Is my name Abdulahi?').toUpperCase();

if(answerThree === 'Y' || answerThree === 'YES'){
  //console.log('Youre right!');
  alert('Youre right!');

} else if(answerThree === 'N' || answerThree === 'NO'){
  //console.log('no, you are wrong');
  alert('no, you are wrong');
  
}
// Questain Four
let answerFour = prompt('Is 201 fun?').toUpperCase();

if(answerFour === 'Y' || answerFour === 'YES'){
  //console.log('Youre right!');
  alert('Youre right!');

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

}

alert(`${userName} thank you for anwsering the questains !`);