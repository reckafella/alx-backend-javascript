import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency);

    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // get amount
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._newAmount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // get currency
  get currency() {
    return this.currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this.currency = newCurrency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // return full price
  displayFullPrice() {
    return `${this._amount} ${this.currency}`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && (typeof conversionRate !== 'number')) {
      throw new TypeError('Amount and conversion rate must be numbers');
    } else {
      return `${amount * conversionRate}`;
    }
  }
}
