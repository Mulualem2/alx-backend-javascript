export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setter
  set code(Code) {
    this._code = Code;
  }

  set name(Name) {
    this._name = Name;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
