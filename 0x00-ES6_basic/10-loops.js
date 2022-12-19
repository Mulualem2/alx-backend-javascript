export default function appendToEachArrayValue(array, appendString) {
  const end = [];
  for (const value of array) {
    end.push(appendString + value);
  }
  return end;
}
