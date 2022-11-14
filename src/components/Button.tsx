export function Button({
  children = 'Button',
  className = '',
  loading = false,
  onClick = () => console.warn('TODO'),
}) {
  return (
    <button
      className={
        'rounded-lg bg-emerald-800 py-1 px-3 text-neutral-50 transition hover:brightness-90 ' +
        (loading && 'cursor-progress ') +
        className
      }
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
