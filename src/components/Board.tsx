import { useEffect, useState } from 'react';
import { useSolution } from '../hooks/solution';
import { checkPossibilities } from '../shared/sudoku';
import { Button } from './Button';
import { Cell } from './Cell';
import { Checkbox } from './Checkbox';
import { Dividers } from './Dividers';

const makeBoard = () => [
  [0, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 3, 0, 0, 7, 1, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 8, 0, 0],
  [0, 0, 0, 9, 0, 8, 0, 7, 1],
  [1, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 3, 0, 9, 0, 0],
  [5, 0, 7, 0, 0, 6, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 7, 0, 0],
  [0, 0, 1, 8, 0, 0, 0, 0, 2],
];

export function Board() {
  const [state, setState] = useState(makeBoard());
  const [debug, setDebug] = useState(true);

  const solution = useSolution({
    onSuccess: (response) => setState(response.solution),
  });

  useEffect(() => {
    checkPossibilities(state)
  }, [state]);

  const onInput = ([x, y]: [number, number], input: string) => {
    const parsedInput = input.length ? +input.at(-1) : 0;
    setState((board) => {
      board[x][y] = parsedInput ?? 0;
      return [...board];
    });
  };

  return (
    <>
      <section className="relative grid grid-cols-9 gap-1 bg-neutral-800 p-1">
        {state.map((rows, rowIndex) =>
          rows.map((cell, cellIndex) => (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              position={[rowIndex, cellIndex]}
              value={cell}
              debug={debug}
              onInput={onInput}
            />
          )),
        )}

        <Dividers />
      </section>

      <div className="flex gap-8">
        <Checkbox label="Debug" checked={debug} onChange={setDebug} />

        <Button onClick={() => solution.get(state)} loading={solution.loading}>
          Solve
        </Button>

        <Button onClick={() => setState(makeBoard())}>
          Reset
        </Button>
      </div>
    </>
  );
}
