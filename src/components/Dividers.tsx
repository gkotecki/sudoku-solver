const xPositions = [0, 1, 2, 3];
const yPositions = [0, 1, 2, 3];
const factor = 156;
const positionOffset = (ix) => `${ix * factor}px`;

export function Dividers() {
  return (
    <>
      {xPositions.map((item) => (
        <div
          key={item}
          className="absolute h-full w-1 bg-neutral-700"
          style={{ left: positionOffset(item) }}
        ></div>
      ))}
      {yPositions.map((item) => (
        <div
          key={item}
          className="absolute h-1 w-full bg-neutral-700"
          style={{ top: positionOffset(item) }}
        ></div>
      ))}
    </>
  );
}
