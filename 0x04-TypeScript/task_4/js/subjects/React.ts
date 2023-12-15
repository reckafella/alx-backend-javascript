/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference path ="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subjects.Subject{
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact >= 1) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No Available teacher';
    }
  }
}
