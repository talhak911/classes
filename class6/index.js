"use strict";
let Students = [
    { name: "Talha",
        age: 2,
        class: 3,
        isActive: true
    },
    { name: "Ali",
        age: 16,
        class: 10,
        isActive: true },
    {
        name: "Javed",
        age: 13,
        class: 7,
        isActive: false
    }
];
let activeStudents = Students.filter((data, index, Stud) => {
    if (data.isActive == true) {
        console.log("full array", Stud);
        return true;
    }
});
console.log(activeStudents);
