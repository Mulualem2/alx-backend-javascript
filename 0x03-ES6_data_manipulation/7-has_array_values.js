export default function hasValuesFromArray(set, array) {
  // returns a boolean if all the elements in the array exist within the set.
  return array.every((element) => set.has(element));
}
