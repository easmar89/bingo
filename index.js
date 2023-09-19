const fs = require("fs");

const input = fs.readFileSync("realData.txt", "utf8");
const lines = input.split("\n").filter(Boolean);
const drawnNumbers = lines[0].split(",").map(Number);

let boards = {};
let boardIndex = 0;
let winningBoards = [];

function extractData() {
  for (let i = 1; i < lines.length; i += 5) {
    const boardRows = lines
      .slice(i, i + 5)
      .map((line) => line.split(" ").filter(Boolean).map(Number));

    boards[boardIndex] = {
      numbers: {},
      rowsCounters: Array(5).fill(0),
      colsCounters: Array(5).fill(0),
      winner: false,
    };

    for (let row = 0; row < boardRows.length; row++) {
      for (let col = 0; col < boardRows[row].length; col++) {
        const number = boardRows[row][col];
        boards[boardIndex].numbers[number] = [row, col, false];
      }
    }

    boardIndex++;
  }
}

function main() {
  for (let i = 0; i < drawnNumbers.length; i++) {
    let num = drawnNumbers[i];
    for (let boardKey in boards) {
      let board = boards[boardKey];

      if (board.winner) {
        continue;
      }

      if (board.numbers[num]) {
        let rowIndex = board.numbers[num][0];
        let colIndex = board.numbers[num][1];
        board.numbers[num][2] = true;
        board.rowsCounters[rowIndex]++;
        board.colsCounters[colIndex]++;

        if (checkForWinner(board)) {
          winningBoards.push(boardKey);
          if (winningBoards.length === Object.keys(boards).length) {
            console.log("Last winner score:", calculateScore(boardKey) * num);
            return;
          }
          board.winner = true;
        }
      }
    }
  }
}

function checkForWinner(board) {
  return (
    board.rowsCounters.some((val) => val === 5) ||
    board.colsCounters.some((val) => val === 5)
  );
}

function calculateScore(boardKey) {
  let sum = 0;
  for (let numberKey in boards[boardKey].numbers) {
    if (!boards[boardKey].numbers[numberKey][2]) {
      sum += +numberKey;
    }
  }

  return sum;
}

extractData();
main();
