"use strict";
class person {
    add(a, b, c) {
        if (c === undefined) {
            return a + b;
        }
        else {
            return a + b + c;
        }
    }
}
let objPerson = new person();
console.log(objPerson.add(2, 3, 4));
console.log(objPerson.add(30, 40));
