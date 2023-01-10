'use strict'
const player0Score = document.getElementById('score--0');
const player1Score = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1')
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let score = document.querySelectorAll('.score');

// Initial condition for game,
let totalScore, isPlaying, scoreOfPlayer, activePlayer;
const intilaizationGame = () => {
	isPlaying = true;
	scoreOfPlayer = 0;
	totalScore = [0, 0];
	activePlayer = 0;
	player0Score.textContent = 0;
	player1Score.textContent = 0;
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;
	player0.classList.remove('player--winner');
	player1.classList.remove('player--winner');
	player0.classList.add('player--active');
	player1.classList.remove('player--active');
	dice.classList.add('hidden');
}
intilaizationGame();
const rollDice = () => {
	if (isPlaying == true) {
		// 1. Create random number
	const randomNumber = Math.trunc(Math.random() * 6) + 1;
	// 2. Show the randum number in div dice
		dice.src = `img/dice${randomNumber}.png`;
		dice.classList.add('display');
	//3. Check if randum number is egal with 1
	if(randomNumber !== 1) {
		scoreOfPlayer += randomNumber;
		document.getElementById(`current--${activePlayer}`).textContent = scoreOfPlayer;
		//console.log(`aici e in if ${activePlayer}`);
	} else {
		scoreOfPlayer = 0;
		document.getElementById(`current--${activePlayer}`).textContent = scoreOfPlayer;
		activePlayer = activePlayer === 0 ? 1 : 0;
		player0.classList.toggle('player--active');
		player1.classList.toggle('player--active');
	}
	}
}
const holdScore =() => {
	if (isPlaying == true) {
		totalScore[activePlayer] += scoreOfPlayer;
		document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
	if (totalScore[activePlayer] >= 100) {
		isPlaying = false
		console.log(isPlaying);
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		dice.classList.toggle('display');
		
	} else {
		scoreOfPlayer = 0;
		document.getElementById(`current--${activePlayer}`).textContent = scoreOfPlayer;
		activePlayer = activePlayer === 0 ? 1 : 0;
		player0.classList.toggle('player--active');
		player1.classList.toggle('player--active');
		score.textContent = scoreOfPlayer;
	}
	}
}
// Event listener for all btn of game:
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', intilaizationGame);
