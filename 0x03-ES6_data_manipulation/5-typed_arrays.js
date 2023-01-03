export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (position > length - 1) {
    // throws an error if adding the value is not possible
    throw Error('Position outside range');
  } else {
    view.setInt8(position, value);
  }
  return view;
}
