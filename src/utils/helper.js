export function rand (from, to) {
  return parseInt(Math.random() * (to - from) + from);
}