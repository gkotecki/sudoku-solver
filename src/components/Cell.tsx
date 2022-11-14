export function Cell({ value = 0, position = [0, 0], debug = false, onInput }) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center bg-neutral-900 text-neutral-200">
      <input
        className="h-12 w-12 bg-transparent text-center outline-emerald-700"
        value={value || ''}
        onChange={(e) => onInput(position, e.target.value)}
      />
      {debug && (
        <small className="absolute bottom-0 right-0 font-mono text-xs leading-none text-neutral-600">
          {position}
        </small>
      )}
    </div>
  );
}
