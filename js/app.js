let score = 0;

let userRank;

const main = document.querySelector('main');

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

if (score === 5) {
  userRank = 'Gold';
} else if (score >= 3) {
  userRank = 'Silver';
} else if (score >= 2) {
  userRank = 'bronze';
} else {
  userRank = 'no Rank';
}

main.innerHTML = `Congratulations, you have scored ${score} out of 5.
You have achieved the rank of ${userRank}`;
