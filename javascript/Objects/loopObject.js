let student = {
    name: "John",
    age: 20,
    grade: "A", 
    city: "New York",
    country: "USA",
    hobbies: ["reading", "sports", "music"]
};

for(let key in student){
    console.log(key, student[key]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));