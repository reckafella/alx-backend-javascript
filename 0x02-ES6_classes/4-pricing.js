import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // get amount
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // get currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // return full price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && (typeof conversionRate !== 'number')) {
      throw new TypeError('Amount and conversion rate must be numbers');
    } else {
      return amount * conversionRate;
    }
  }
}
