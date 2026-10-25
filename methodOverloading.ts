class person{
    public add(a:number,b:number,c:number):number;
    public add(a:number,b:number):number;
    add(a:number,b:number,c?:number):number{
    if(c===undefined){
        return a+b;
    }
    else{
        return a+b+c;
    }
}
}
let objPerson=new person();
console.log(objPerson.add(2,3,4));
console.log(objPerson.add(30,40));
