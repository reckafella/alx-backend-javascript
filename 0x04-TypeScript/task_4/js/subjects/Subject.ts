// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path ='Teacher.ts'/>
/* eslint-disable @typescript-eslint/no-namespace */
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
