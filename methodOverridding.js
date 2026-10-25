"use strict";
class Parent {
    constructor() {
        console.log("I am parent constructor");
    }
    desc() {
        console.log("parent Desc");
    }
}
class child extends Parent {
    constructor() {
        console.log("I am child constructor");
        super();
    }
    desc() {
        console.log("child Desc");
    }
}
// let objParent=new Parent();
// objParent.desc();
let objChild = new child();
objChild.desc();
