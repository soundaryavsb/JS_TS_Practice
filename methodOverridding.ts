class Parent{
    constructor(){
        console.log("I am parent constructor");
    }
    public desc(){
        console.log("parent Desc");
    }
}
class child extends Parent{
    constructor(){
        console.log("I am child constructor");
        super();
    }
    public override desc(){
        console.log("child Desc");
    }
}
// let objParent=new Parent();
// objParent.desc();
let objChild=new child();
objChild.desc();