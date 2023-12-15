import { Student } from "../../task_0/js/main"

/* Task 1 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


/* Task 2 */
interface Directors extends Teacher {
  numberOfReports: number;
}


/* Task 3 */
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


/* Task 4 */
/* class should be described through an Interface */
interface StudentExtended extends Student {
  workOnHomework(): string;
  displayName(): string;
}

/* constructor of the class should be described through an Interface */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentExtended;
}


class StudentClass implements StudentExtended {
  private _firstName: string;
  private _lasName: string;

  /* accepts firstName(string) and lastName(string) arguments */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lasName = lastName;
  }

  /* a method that return the string Currently working */
  workOnHomework(): string {
    return `Currently working`;
  }

  /* returns the firstName of the student */
  displayName(): string {
    return `${this._firstName}`;
  }
}
