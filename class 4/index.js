"use strict";
var sum = 0;
let arr = [];
for (var i = 0; i < 100; i + 2) {
    // if (i%2==0){
    sum = sum + i;
    arr.push(i);
    arr.push("+");
}
console.log(sum, arr);
