import { useState } from 'react';
import { useSolution } from '../hooks/solution';
import { Button } from './Button';
import { Cell } from './Cell';
import { Checkbox } from './Checkbox';

const initialBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export function Board() {
  const [state, setState] = useState(initialBoard);
  const [debug, setDebug] = useState(true);

  const solution = useSolution({
    onSuccess: (response) => setState(response.solution),
  });

  const onInput = ([x, y]: [number, number], input: string) => {
    const parsedInput = input.length ? +input.at(-1) : 0;
    setState((_state) => {
      _state[x][y] = parsedInput ?? 0;
      return [..._state];
    });
  };

  return (
    <>
      <section className="relative grid grid-cols-9 gap-1 bg-neutral-700 p-1">
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
      </section>

      <div className="flex gap-8">
        <Checkbox label="Debug" checked={debug} onChange={setDebug} />
        <Button onClick={() => solution.get(state)} loading={solution.loading}>
          Solve
        </Button>
        <Button onClick={() => setState(initialBoard)}>
          Reset
        </Button>
      </div>
    </>
  );
}
