//Tuple
let person:[string,number]=["Talha",12]

//Enum

enum Color{"Red","Green","White"}


console.log("Color with its index",Color.Red,Color[Color.Red]);
console.log("Color with its index",Color.Green,Color[Color.Green]);
console.log("Color with its index",Color.White,Color[Color.White]);
let color="Red"
if (Color.Red==0){
    console.log("Color is",color);    
}
if (Color.Green==1)
{ console.log("Color is ", Color[Color.Green])};

let obj= {name:"talha", marks:99}
console.log(obj)
let obj1:{name:string,age: number,marks:number}
obj1 = {name:"Talha khan", age:20,marks:100};
obj=obj1;
console.log(obj)

// types
let obj3={name:"talha",age:20}
type p={name:string}
let obj2:p={name:"tk"}
// Error obj1=obj2
obj2 =obj3
console.log(obj2)

//
let obj4:{name:string,age?: number}={name:"tk",age:12}
let obj5:{name:string}={name:"talha"}
//ok
obj4=obj5
console.log(obj5)
