class Parent{
    constructor(){
        this.fatherName = "Rofiqul Islam";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + this.fatherName;
    }
}




const baby = new Child("sadiqul");
const baby2 = new Child("amirul");
const baby3 = new Child("abc");

console.log(baby.getFullName());
console.log(baby2);
console.log(baby3);

