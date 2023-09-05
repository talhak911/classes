"use strict";
let todolist = ["breakfast", "lunch", "tea", "dinner", "sleep"];
if (todolist.length / 2 != 0) {
    todolist.splice(todolist.length / 2, 1);
}
else {
    todolist.splice(todolist.length / 2, 2);
}
console.log(todolist);
console.log("start new");
var index = 1;
while (index <= 10) {
    var result = 5 * index;
    console.log("5 * " + index + " = " + result);
    index += 1;
}
