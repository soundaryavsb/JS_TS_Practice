class Parent{
    age:number=28;
    display(){
        console.log("I am Parent");
    }
}
class Child extends Parent{
    child(){
        console.log("I am child");
    }
}
let obj=new Child();
obj.display();
obj.child();
console.log("age: "+obj.age);
