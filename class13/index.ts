abstract class Shape {
    constructor(public height:number,public width: number){}
    area(){return this.height*this.width}    
}

class Rectangle extends Shape{

}
class Cube extends Shape{
    constructor(height:number,width:number,public length:number){
        super(height,width)
        
    }
    area(): number {
        return this.height*this.width*this.length
    }
}

const cube1=new Cube(10,10,10)
console.log("Area of cube is ",cube1.area());
console.log("");



////////////////////////////////////////
// inheritance from interface

interface Istudent{
    name:string,
    age:number,
    degreeProgram:string,
    cgpa:number

    getInfo():{}
    
}
class Student implements Istudent{
    constructor(public name:string,public age:number,public degreeProgram:string,public cgpa:number){}

    getInfo(): {} {
        return {
            name:this.name,
            age:this.age,
            degreeProgram:this.degreeProgram,
            cgpa:this.cgpa
        }
    }
}
const studentArray:{}[]=[]
function addStudent(name:string,age:number, degreeProgram:string,cgpa:number):Istudent{
    const newStudent= new Student(name,age,degreeProgram,cgpa)
    studentArray.push(newStudent)
    return newStudent
}

addStudent("Ahmad",22,"BSCS",3.2)

addStudent("Nasir",21,"BSSE",3.99)
console.log(studentArray);

