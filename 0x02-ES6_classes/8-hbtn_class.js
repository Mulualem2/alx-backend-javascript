export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    // casting a string
    if (hint === 'string') {
      return this._location;
    }

    // casting a number
    if (hint === 'number') {
      return this._size;
    }
    return 0;
  }
}
