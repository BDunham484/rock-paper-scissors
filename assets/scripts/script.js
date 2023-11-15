var startButtonEl = document.getElementById('start-button');
var resetButtonEl = document.getElementById('reset-button');
var playerCardEl = document.getElementById('player-card');
var computerCardEl = document.getElementById('computer-card');
var resultsEl = document.getElementById('results');


var startGame = function() {
    console.log('Good Luck');

//    SOME CODE GOES HERE

    var dealer = function() {
        var dealerChoices = ['Rock', 'Paper', 'Scissors'];
        var randomNum = function() {
            return Math.floor(Math.random() * 3)
        }
        var dealersHand = dealerChoices[randomNum()];
        computerCardEl.textContent = dealersHand;
    }

//    SOME MORE CODE GOES HERE
}

var resetGame = function() {
    playerCardEl.textContent = '';
    computerCardEl.textContent = '';
}

startButtonEl.addEventListener('click', startGame);
resetButtonEl.addEventListener('click', resetGame);
