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