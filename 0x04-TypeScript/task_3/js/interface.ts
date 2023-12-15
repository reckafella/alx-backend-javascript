/*
* Create a type RowID and set it equal to number
* Create an interface RowElement that contains these 3 fields:
*   firstName: string
*   lastName: string
*   age?: number
*/
export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
