let students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Doe", age: 19, grade: "A"},
    {name: "Smith", age: 21, grade: "C"}
];

let total = students.reduce((acc, s) => acc + s.age, 0);
let avg = total / students.length;

console.log("Average age:", avg);

