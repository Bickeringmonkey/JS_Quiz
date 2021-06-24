// Score Variable - using Let so that the score can be added to.
let score = 0;
// userRank for storing the Rank the user recieves based on the score.. again using let so that the variable can be updated
let userRank;

// creating the variable to log the outcome to the screen, this uses const as we don't want this to change
const main = document.querySelector('main');

// 5 questions that will be asked in the prompt box, each consists of an if statement that will add 1 point for a correct answer. also uses toUpperCase() which makes all inputs to the prompt box turn into caps so that there is no issues with exact matches.

const question1 = prompt("What film includes 'Face Huggers'?");
if (question1.toUpperCase() === 'ALIENS') {
  score += 1;
}
const question2 = prompt('Luke Skywalker was a character in this?');
if (question2.toUpperCase() === 'STARWARS') {
  score += 1;
}
const question3 = prompt('Celine Dion wrote the song for this film?');
if (question3.toUpperCase() === 'TITANIC') {
  score += 1;
}
const question4 = prompt('talks to his dad over a ham radio?');
if (question4.toUpperCase() === 'FREQUENCY') {
  score += 1;
}
const question5 = prompt('In this film the rides eat the guests?');
if (question5.toUpperCase() === 'JURASSIC PARK') {
  score += 1;
}

// if statements to update the userRank depending on what is logged in the score vaiable.
if (score === 5) {
  userRank = 'Gold';
} else if (score >= 3) {
  userRank = 'Silver';
} else if (score >= 2) {
  userRank = 'bronze';
} else {
  userRank = 'no Rank';
}

// main variable with innerHTML attached which will display the content in between the main tags on the website.s
main.innerHTML = `Congratulations, you have scored ${score} out of 5.
You have achieved the rank of ${userRank}`;
