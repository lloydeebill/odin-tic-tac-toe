


const Gameboard = (() => {

  const cells = document.querySelectorAll('.cell');

  const getCells = () => cells;

  const checkWin = (mark) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ];
  
  
  return winPatterns.some(pattern =>
      pattern.every(index => cells[index].innerText === mark)
    );
  };




  return {checkWin, getCells};



})();


const GameController = (() => {

  let currentMark = "O";

  const createPlayer = (name, mark) => {
    const playerName = name;
    const playerMark = mark; 
    const playerMove = function() {
      currentMark = playerMark;
    }
    return {playerName,playerMark, playerMove}; 
  
  
  }


  const player1 = createPlayer("lloyd","X");
  const player2 = createPlayer("bill","O");



  const startGame = () => {

    Gameboard.getCells().forEach(cell => {
      cell.addEventListener("click", () => {
      
        if (cell.innerText === "") {
          if (currentMark === "O") {
            player1.playerMove();
          
          } else if ( currentMark === "X") {
            player2.playerMove();
          }
  
          const mark = document.createElement("h1");
          mark.classList.add("mark");
          cell.appendChild(mark);
          mark.innerText = currentMark;
  
          if (Gameboard.checkWin(currentMark)) {
            console.log(`${currentMark} wins`);
            // You can add code here to display a message or take other actions
          }
        }
      });
    })
  }
  



  return {createPlayer, startGame};


})();



GameController.startGame();


  






  
  








