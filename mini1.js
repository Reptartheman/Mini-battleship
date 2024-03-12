const rs = require('readline-sync');

const across = [1, 2, 3];
const upAndDown = ['A', 'B', 'C'];

const startGame = () => {
  return rs.keyIn('Press any key to start the game');
}

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(sample(across));
console.log(sample(upAndDown));