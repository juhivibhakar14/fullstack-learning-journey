let student ={
    name: "John",
    age: 20,
    grade: "A"
}
console.log("age of student",student.age);
console.log("name of student",student.name);
console.log("grade of student",student.grade);

student.age = 21;
console.log("updated age of student",student["age"]);

student.grade = "A+";
console.log("updated grade of student",student.grade);

student.city = "New York";
console.log("city of student",student.city);

student["country"] = "USA";
console.log("country of student",student.country);

delete student.grade;
console.log("grade of student after deletion",student.grade);