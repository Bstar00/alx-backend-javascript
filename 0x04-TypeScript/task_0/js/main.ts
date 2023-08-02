// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Janet",
  lastName: "Mark",
  age: 24,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
