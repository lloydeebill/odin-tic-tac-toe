
let currentMark = "O";

function createPlayer(name, mark) {

  const playerName = name;

  const playerMark = mark; 

  const playerMove = function() {
    currentMark = playerMark;
  }


  return {playerName,playerMark, playerMove}; 


}



const player1 = createPlayer("lloyd","X");

const player2 = createPlayer("bill","O");



const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
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
    }
  });
})

