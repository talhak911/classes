"use strict";
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() { return this.height * this.width; }
}
class Rectangle extends Shape {
}
class Cube extends Shape {
    constructor(height, width, length) {
        super(height, width);
        this.length = length;
    }
    area() {
        return this.height * this.width * this.length;
    }
}
const cube1 = new Cube(10, 10, 10);
console.log("Area of cube is ", cube1.area());
console.log("");
class Student {
    constructor(name, age, degreeProgram, cgpa) {
        this.name = name;
        this.age = age;
        this.degreeProgram = degreeProgram;
        this.cgpa = cgpa;
    }
    getInfo() {
        return {
            name: this.name,
            age: this.age,
            degreeProgram: this.degreeProgram,
            cgpa: this.cgpa
        };
    }
}
const studentArray = [];
function addStudent(name, age, degreeProgram, cgpa) {
    const newStudent = new Student(name, age, degreeProgram, cgpa);
    studentArray.push(newStudent);
    return newStudent;
}
addStudent("Ahmad", 22, "BSCS", 3.2);
addStudent("Nasir", 21, "BSSE", 3.99);
console.log(studentArray);
