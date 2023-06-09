import { useEffect, useMemo, useState } from 'react';

export function Cell({
  value = 0,
  position = [0, 0],
  debug = false,
  onInput,
  pOptions = { possible: [], forbidden: [] },
}) {
  const [isCustomInput, setIsCustomInput] = useState(false);

  useEffect(() => {
    if (!value) {
      setIsCustomInput(false);
    }
  }, [value]);

  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center ${
        !value && !pOptions.possible.length ? 'bg-[#231111]' : 'bg-neutral-900'
      } ${
        isCustomInput
          ? 'font-bold text-emerald-500 shadow-inner-center shadow-emerald-900'
          : 'text-neutral-200'
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
        <>
          <small className="pointer-events-none absolute top-[1px] left-[1px] font-mono text-[10px] leading-none text-blue-700">
            {pOptions.possible}
          </small>
          <small className="pointer-events-none absolute top-3 left-[1px] font-mono text-[10px] leading-none text-red-800">
            {pOptions.forbidden}
          </small>
          <small className="pointer-events-none absolute bottom-[1px] right-[1px] font-mono text-[10px] leading-none text-neutral-600">
            {position}
          </small>
        </>
      )}
    </div>
  );
}
