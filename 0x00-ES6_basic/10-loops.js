export default function appendToEachArrayValue(array, appendString) {
  const new_array = [];
  for (const idx of array) {
    const value = idx;
    new_array.push(appendString + value);
  }

  return new_array;
}
