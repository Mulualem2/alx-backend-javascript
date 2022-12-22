export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students) && students.every((i) => typeof i !== 'string')) {
      throw TypeError('Students must be an array of strings');
    } else {
      this._students = students;
    }
  }

  // getter
  get name() {
    return this._name;
  }

  // gets the length
  get length() {
    return this._length;
  }

  // gets the amount of students
  get students() {
    return this._students;
  }

  // setter
  set name(Name) {
    if (typeof Name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = Name;
    }
  }

  set length(Length) {
    if (typeof Length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = Length;
    }
  }

  // sets the amount of students
  set students(Students) {
    if (!Array.isArray(Students) && Students.every((i) => typeof i !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = Students;
  }
}
