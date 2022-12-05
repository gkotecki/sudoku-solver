export function getClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
