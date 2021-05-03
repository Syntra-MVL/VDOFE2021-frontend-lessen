// const $aiCode = document.getElementById('ai-code');
// const $user_code = document.getElementById('user-code');
// const $historyContainer = document.getElementById('history-container');
// const $btnContainer = document.getElementById('btn-container');
// const $restartContainer = document.getElementById('restart-btn-container');
// const $gameContainer = document.getElementById('game-btn-container');
// const $restart = document.getElementById('restart');
// const $mastermind = document.getElementById('mastermind');
// const $message = document.getElementById('message');
// const $guessInput = document.getElementById('guess-input');
// const $undoBtn = document.getElementById('undo-btn');
// const $submitBtn = document.getElementById('submit-btn');
//
// const maxGuesses = 10;
// const codeLength = 6;
// const colorArray = ['wit', 'geel', 'oranje', 'rood', 'paars', 'blauw', 'groen'];
// const gameState = {
//   guessCount: 0,
//   solution: [0, 0, 0, 0, 0, 0],
//   currentGuess: [],
//   gameOver: false,
//   won: false,
// };
//
// function genAiCode() {
//   let aiCode = [];
//   for (let i = 0; i < codeLength; i++) {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     aiCode.push(randomIndex);
//   }
//   return aiCode;
// }
//
// function checkCorrectNumberAndPlace(solution, guess) {
//   let correctNumberAndPlace = 0;
//
//   for (let i = 0; i < codeLength; i++) {
//     if (solution[i] === guess[i]) {
//       correctNumberAndPlace++;
//     }
//   }
//
//   return correctNumberAndPlace;
// }
//
// function checkCorrectNumber(solution, guess, correctNumberAndPlace) {
//   let correctNumber = 0;
//
//   let solCount = [0, 0, 0, 0, 0, 0, 0];
//   let guessCount = [0, 0, 0, 0, 0, 0, 0];
//
//   for (let i = 0; i < colorArray.length; i++) {
//     for (let j = 0; j < codeLength; j++) {
//       if (guess[j] === i) {
//         guessCount[i]++;
//       }
//
//       if (solution[j] === i) {
//         solCount[i]++;
//       }
//     }
//
//     correctNumber += Math.min(solCount[i], guessCount[i]);
//   }
//
//   return correctNumber - correctNumberAndPlace;
// }
//
// function printHistory() {
//   // $history_user_codes.insertAdjacentHTML(
//   //   "beforeend",
//   //   "AI code: " + aiCode + "</p>"
//   // );
// }
//
// function genCodeHTML(codeArray) {
//   let codeHTML = '';
//   for (let i = 0; i < codeArray.length; i++) {
//     let curIndex = codeArray[i];
//     codeHTML +=
//       '<span class="' +
//       colorArray[curIndex] +
//       '">' +
//       colorArray[curIndex] +
//       '</span>';
//   }
//
//   return codeHTML;
// }
//
// function initGameState() {
//   gameState.guessCount = 0;
//   gameState.gameOver = false;
//   gameState.won = false;
//   gameState.solution = genAiCode();
//   gameState.currentGuess = [];
// }
//
// function initGame() {
//   $historyContainer.innerHTML = '';
//   $aiCode.innerHTML = genCodeHTML(gameState.solution);
//   $aiCode.classList.add('hide');
//   $message.innerText = '';
//   $guessInput.innerHTML = '';
//   $gameContainer.classList.remove('do-not-show');
//   $restartContainer.classList.add('do-not-show');
// }
//
// function reset() {
//   initGameState();
//   initGame();
// }
//
// function printGuessInput(currentGuess) {
//   $guessInput.innerHTML = genCodeHTML(currentGuess);
// }
//
// function clickSelectBtn(event) {
//   if (
//     event.target.matches('.select-btn') &&
//     gameState.currentGuess.length < codeLength
//   ) {
//     const selectedIndex = parseInt(event.target.dataset.index);
//     gameState.currentGuess.push(selectedIndex);
//     printGuessInput(gameState.currentGuess);
//   }
// }
//
// function clickUndoBtn() {
//   gameState.currentGuess.pop();
//   printGuessInput(gameState.currentGuess);
// }
//
// function printHistoryItem(guess, correctNumberAndPlace, correctNumber) {
//   const historyItemHTML =
//     '<div class="history-item">' +
//     '<p class="result-row">' +
//     genCodeHTML(guess) +
//     '</p>' +
//     '<p>' +
//     correctNumberAndPlace +
//     ' kleuren juist</p>' +
//     '<p>' +
//     correctNumber +
//     ' kleuren juist maar op de foute plaats</p>' +
//     '</div>';
//
//   $historyContainer.insertAdjacentHTML('beforeend', historyItemHTML);
// }
//
// function gameOver(won) {
//   if (won) {
//     $message.textContent = 'You won';
//   } else {
//     $message.textContent = 'You lost, try again';
//   }
//
//   $gameContainer.classList.add('do-not-show');
//   $restartContainer.classList.remove('do-not-show');
// }
//
// function clickSubmitBtn() {
//   if (gameState.currentGuess.length === codeLength) {
//     gameState.guessCount++;
//     const correctNumberAndPlace = checkCorrectNumberAndPlace(
//       gameState.solution,
//       gameState.currentGuess,
//     );
//     const correctNumber = checkCorrectNumber(
//       gameState.solution,
//       gameState.currentGuess,
//       correctNumberAndPlace,
//     );
//
//     printHistoryItem(
//       gameState.currentGuess,
//       correctNumberAndPlace,
//       correctNumber,
//     );
//
//     if (correctNumberAndPlace === codeLength) {
//       gameState.gameOver = true;
//       gameState.won = true;
//       gameOver(gameState.won);
//     } else if (gameState.guessCount === maxGuesses) {
//       gameState.gameOver = true;
//       gameState.won = false;
//       gameOver(gameState.won);
//     }
//
//     gameState.currentGuess = [];
//     printGuessInput([]);
//   }
// }
//
// reset();
//
// $btnContainer.addEventListener('click', clickSelectBtn);
// $undoBtn.addEventListener('click', clickUndoBtn);
// $submitBtn.addEventListener('click', clickSubmitBtn);
// $restart.addEventListener('click', reset);

const app = new Vue({
  el: '#app',
});
