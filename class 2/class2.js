"use strict";
function findNumber(a) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return ("It is not prime number");
        }
        else {
            return ("it is prime ");
        }
    }
}
console.log(findNumber(7));
