export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function draw(amount, min, max, noRepeat) {
  const intervalSize = max - min + 1;

  if (!noRepeat) {
    const out = [];
    for (let i = 0; i < amount; i++) out.push(randInt(min, max));
    return out;
  }

  const used = new Set();
  while (used.size < amount) used.add(randInt(min, max));
  return Array.from(used);
}