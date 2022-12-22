export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // method
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }

  static get [Symbol.species]() {
    return this;
  }
}
