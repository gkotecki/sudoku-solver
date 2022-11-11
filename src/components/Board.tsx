import { useState } from 'react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

const initialBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 2, 3, 4, 5, 6, 7, 8, 9],
  [3, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 2, 3, 4, 5, 6, 7, 8, 9],
  [5, 2, 3, 4, 5, 6, 7, 8, 9],
  [6, 2, 3, 4, 5, 6, 7, 8, 9],
  [7, 2, 3, 4, 5, 6, 7, 8, 9],
  [8, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 2, 3, 4, 5, 6, 7, 8, 9],
];

export function Board() {
  const [state, setState] = useState(initialBoard);
  const [debug, setDebug] = useState(true);

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
        <Button
          onClick={() => console.warn('TODO: implement from https://github.com/bertoort/sugoku')}
        >
          Solve
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
