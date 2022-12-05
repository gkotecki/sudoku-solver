import { useState } from 'react';
import { checkPossibilities } from '../shared/sudoku';

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
    checkPossibilities(newBoard)
      .then((solution) =>
        options.onSuccess({ difficulty: 'string', solution: newBoard, status: 'string' }),
      )
      .catch((...e) => options.onError(e))
      .finally(() => setLoading(false));
  };

  return { get, loading };
}
