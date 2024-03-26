const rs = require('readline-sync');

const board = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
const [a1, a2, a3, b1, b2, b3, c1, c2, c3] = board;


const startGame = () => {
  rs.keyIn('Press any key to start the game ');
  let answered = [];
  for (let i = 0; i < 2; i++) {
    answered.push(sample(board));
  }
    console.log(`Your ships are located at ${answered}`);
  return enterLocation();
}

const enterLocation = () => {
  
    rs.question('Enter a location to strike ', { 
    limit: board,
    limitMessage: `Please only use the following options: ${board}` 
  })


 
}

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

startGame();




/*
 
- DONE: When the application loads, print the text, "Press any key to start the game." 
- DONE: When the user presses the key, your code will randomly place two different ships in two separate locations on the board. Each ship is only 1 unit long (In the real game ships are 2+ in length).
- DONE: The prompt will then say, "Enter a location to strike ie 'A2' "
- The user will then enter a location. If there is a ship at that location the prompt will read, "Hit. You have sunk a battleship. 1 ship remaining."
- If there is not a ship at that location the prompt will read, "You have missed!"
- If you enter a location you have already guessed the prompt will read, "You have already picked this location. Miss!"
- When both of the battleships have been destroyed the prompt will read, "You have destroyed all battleships. Would you like to play again? Y/N"
- If "Y" is selected the game starts over. If "N" then the application ends itself.

*/
