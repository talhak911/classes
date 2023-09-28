//Tuple
let person = ["Talha", 12];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
console.log("Color with its index", Color.Red, Color[Color.Red]);
console.log("Color with its index", Color.Green, Color[Color.Green]);
console.log("Color with its index", Color.White, Color[Color.White]);
let color = "Red";
if (Color.Red == 0) {
    console.log("Color is", color);
}
export {};
