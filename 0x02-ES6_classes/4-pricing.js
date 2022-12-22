// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  // getter
  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  // setter
  set currency(Currency) {
    this._currency = Currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  // static that calculates amount multiplied by conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
