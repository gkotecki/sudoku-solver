export function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2 text-neutral-300">
      {label}
      <input
        className="cursor-pointer accent-emerald-700"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
