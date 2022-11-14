import { useState } from 'react';
import { useSolution } from '../hooks/solution';
import { Button } from './Button';
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
    onSuccess: (response) => {
      if (debug) console.log(response);
      setState(response.solution);
    },
  });

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

function Cell({ value, position, debug }) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center bg-neutral-900 text-neutral-200">
      {value}
      {debug && (
        <small className="absolute bottom-0 right-0 font-mono text-xs text-neutral-500">
          {position}
        </small>
      )}
    </div>
  );
}
