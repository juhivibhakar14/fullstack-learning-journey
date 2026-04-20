let students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Doe", age: 19, grade: "A"},
    {name: "Smith", age: 21, grade: "C"}
];

let filteredStudents = students.filter(s => s.age > 20);
console.log("Filtered Students:", filteredStudents);

