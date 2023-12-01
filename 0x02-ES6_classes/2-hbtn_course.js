export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Number must be a number');
    }

    if ((students instanceof Array) && (students.every((item) => typeof item === 'string'))) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  // return name
  get name() {
    return this._name;
  }

  // set name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // get length
  get length() {
    return this._length;
  }

  // set length
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // get students array
  get students() {
    return this._students;
  }

  // set students array
  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((item) => typeof item === 'string')) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
