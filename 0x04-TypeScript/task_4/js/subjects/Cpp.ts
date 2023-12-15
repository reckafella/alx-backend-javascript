/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference path ="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return `Here is the list of requirements for Cpp`;
    }
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC >= 1){
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No Available teacher';
    }
  }
}
