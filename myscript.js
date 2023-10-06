// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)




// Create a function that will check the square marker
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}

//Check for a winner
var winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

function checkWinner() {
  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent) {
      // We have a winner
      return squares[a].textContent;
    }
  }
  return null; // No winner
}

function updateWinnerDisplay() {
  var winner = checkWinner();
  var winnerDisplay = document.getElementById('winner-display');

  if (winner) {
    winnerDisplay.textContent = 'Winner: ' + winner;
  } else {
    winnerDisplay.textContent = 'No Winner Yet';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    changeMarker.call(this);
    updateWinnerDisplay();
  });
}
