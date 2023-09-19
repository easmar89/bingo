const fs = require('fs');

const input = fs.readFileSync('testData.txt', 'utf8');
const lines = input.split('\n');
const drawnNumbers = lines[0].split(',').map(Number);

let boards = {};
let boardIndex = 0;

for (let i = 1; i < lines.length; i += 5) {
  const boardRows = lines
    .slice(i, i + 5)
    .map((line) => line.split(' ').map(Number));

  boards[boardIndex] = {
    rows: {},
    cols: {},
    rowsCounters: Array(5).fill(0),
    colsCounters: Array(5).fill(0),
  };

  for (let row = 0; row < boardRows.length; row++) {
    for (let col = 0; col < boardRows[row].length; col++) {
      const number = boardRows[row][col];
      boards[boardIndex].rows[number] = [row, false];
      boards[boardIndex].cols[number] = [col, false];
    }
  }

  boardIndex++;
}

//test to see if i'm sleepy
if (boards[0].rows[3]) {
  boards[0].rows[3][1] = true;
  let row = boards[0].rows[3][0];
  boards[0].rowsCounters[row]++;
}

console.log(boards[0]);
