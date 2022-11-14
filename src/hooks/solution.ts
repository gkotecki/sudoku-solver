import { useState } from 'react';

function encodeParams(params) {
  const encodeBoard = (board) =>
    board.reduce(
      (result, row, i) =>
        result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`,
      '',
    );
  return Object.keys(params)
    .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');
}

/**
 * Solution request utils hook
 */
export function useSolution(options: {
  onSuccess: (response: { difficulty: string; solution: number[][]; status: string }) => void;
  onError?: (error) => void;
}) {
  const [loading, setLoading] = useState(false);

  const get = (newBoard: number[][]) => {
    setLoading(true);

    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams({ board: newBoard }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then((response) => response.json())
      .then((response) => options.onSuccess(response))
      .catch((...e) => options.onError(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return { get, loading };
}
