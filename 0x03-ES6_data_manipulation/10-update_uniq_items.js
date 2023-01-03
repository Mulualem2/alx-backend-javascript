export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const elements of map) {
    if (elements[1] === 1) {
      map.set(elements[0], 100);
    }
  }
  return map;
}
