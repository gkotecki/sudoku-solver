import { getClone } from './utils';

export let possibilities: Record<string, { forbidden: number[], possible: number[] }> = {};

export async function checkPossibilities(board: number[][]) {
  console.time('checkPossibilities');
  const _possibilities = {};
  const newBoard = getClone(board);
  for (let x = 0; x < newBoard.length; x++) {
    const row = newBoard[x];
    for (let y = 0; y < row.length; y++) {
      const pos = `${x}${y}`;
      const col = getCol(newBoard, [x, y]);
      const square = getSquare(newBoard, [x, y]);
      let cell = row[y];
      for (let i = 1; i <= 9; i++) {
        if (cell) break;
        _possibilities[pos] = { ...(_possibilities[pos] ?? { forbidden: [], possible: [] })}
        if (row.includes(i) || col.includes(i) || square.includes(i)) {
          _possibilities[pos].forbidden.push(i);
        } else {
          _possibilities[pos].possible.push(i);
        }
      }
    }
  }
  possibilities = _possibilities;
  console.log('\tset', JSON.stringify(possibilities['00']))
  console.timeEnd('checkPossibilities');
}

function getCol(board: number[][], [x, y]: [number, number]): number[] {
  return board.map((row) => row[y]);
}

function getSquare(board: number[][], [x, y]: [number, number]): number[] {
  const maps = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const xMap = maps.find((items) => items.includes(x));
  const yMap = maps.find((items) => items.includes(y));
  const square = [];
  for (let ix = xMap[0]; ix <= xMap[2]; ix++) {
    for (let iy = yMap[0]; iy <= yMap[2]; iy++) {
      const cell = board[ix][iy];
      if (cell) square.push(cell);
    }
  }
  return square;
}
