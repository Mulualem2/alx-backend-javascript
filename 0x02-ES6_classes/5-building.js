export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
