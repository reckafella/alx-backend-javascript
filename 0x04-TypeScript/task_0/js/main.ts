export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jack",
  lastName: "Smith",
  age: 34,
  location: "Hong Kong",
};

const student2: Student = {
  firstName: "Katherine",
  lastName: "McGrath",
  age: 32,
  location: "Ireland",
};

const studentList: Array<Student> = [
  student1,
  student2,
];


// Vanilla JavaScript code to render a table and for each
//    elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

studentList.forEach((student) => {
  const row = document.createElement("tr");
  
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
