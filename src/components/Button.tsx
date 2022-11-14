export function Button({
  children = 'Button',
  className = '',
  onClick = () => console.warn('TODO'),
}) {
  return (
    <button
      className={
        'rounded-lg bg-emerald-800 py-1 px-3 text-neutral-50 transition hover:brightness-90 ' +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
