/* Task 5 */
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}


export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }

  getToWork(): string {
    return `Getting a coffee break`;
  }

  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }

  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}


export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }

  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks(): string {
    return `Getting to work`;
  }
}


export function createEmployee(salary: string | number): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}


/* Task 6 */
/*
* accepts employee as an argument
* it will be used as a type predicate and if the employee is a director
*/
export function isDirector(employee: (Teacher | Director)): boolean {
  return (employee instanceof Director);
}


/*
* it accepts employee as an argument
* if the employee is a Director, it will call workDirectorTasks
* if the employee is a Teacher, it will call workTeacherTasks
*/
export function executeWork(employee: (Teacher | Director)) {
  if (isDirector(employee)) {
    const directorInstance = new Director();
    return directorInstance.workDirectorTasks();
  }
  const teacherInstance = new Teacher();
  return teacherInstance.workTeacherTasks();
}

/* Task 7 */
/*
* a String literal type named Subjects allowing a variable to have\
* the value Math or History only. Write a function named teachClass:

* it takes todayClass as an argument
* it will return the string Teaching Math if todayClass is Math
* it will return the string Teaching History if todayClass is History
*/
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return `Teaching Math`;
  }
  if (todayClass === 'History') {
    return `Teaching History`;
  }
}
