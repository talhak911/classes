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
if (Colorm.Green==1)
{ console.log("Color is ", Color[Color.Green])};

let obj= {name:"talha", marks:99}
console.log(obj)
obj1= {name:"Talha khan", marks:100, subject: "computer"};
obj=obj1;
console.log(obj)