


const Gameboard = (() => {

  const cells = document.querySelectorAll('.cell');

  const welcomeScreen = document.querySelector('.welcome-screen-modal');

  const gameOverScreen = document.querySelector('.gameover-modal');
  const gameOverMessage = document.querySelector('.gameover-message');

  let isGameOver = false;

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


  const openWelcomeScreen = () => {

    welcomeScreen.style.display = 'block';

    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click',() => {

      welcomeScreen.style.display = 'none';

    })

    return {welcomeScreen }; 

  } 



  const gameOver = () => {

    return isGameOver = true;

  }

  const showGameOverScreen = (winner) => {
    
    gameOverScreen.style.display = 'block';
    gameOverMessage.innerText = `${winner} wins the game.`


    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener("click",()=> resetBoard());

    return gameOverScreen;


  }

  const resetBoard = () => {

    gameOverScreen.style.display = 'none';

    return cells.forEach(cell => {
      cell.innerText = '';
    })

  }

  



  return {checkWin, getCells, gameOver, showGameOverScreen, resetBoard, openWelcomeScreen};



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
          mark.classList.add("mark", currentMark === "X" ? "mark-blue" : "mark-red");
          cell.appendChild(mark);
          mark.innerText = currentMark;
  
          if (Gameboard.checkWin(currentMark)) {
            console.log(`${currentMark} wins`);
            Gameboard.gameOver();
            Gameboard.showGameOverScreen(currentMark);
          }

          
        }
      });
    })
  }

 console.log(Gameboard.gameOver());
  
  return {createPlayer, startGame};


})();


Gameboard.openWelcomeScreen();


GameController.startGame();


  




  
  








