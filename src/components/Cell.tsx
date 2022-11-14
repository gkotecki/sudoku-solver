import { useEffect, useState } from 'react';

export function Cell({ value = 0, position = [0, 0], debug = false, onInput }) {
  const [isCustomInput, setIsCustomInput] = useState(false);

  useEffect(() => {
    if (!value) {
      setIsCustomInput(false);
    }
  }, [value]);

  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center text-neutral-200 ${
        isCustomInput ? 'bg-emerald-900' : 'bg-neutral-900'
      }`}
    >
      <input
        className="h-12 w-12 bg-transparent text-center outline-emerald-700"
        value={value || ''}
        onChange={(e) => {
          setIsCustomInput(true);
          onInput(position, e.target.value);
        }}
      />
      {debug && (
        <small className="absolute bottom-[1px] right-[1px] font-mono text-xs leading-none text-neutral-600">
          {position}
        </small>
      )}
    </div>
  );
}
