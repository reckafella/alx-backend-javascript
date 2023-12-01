export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // get code
  get code() {
    return this._code;
  }

  // set code
  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // get name
  get name() {
    return this._name;
  }

  // set code
  set name(newName) {
    if (typeof newName === 'string') {
      this._code = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // display full currency in "name (code)" format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
