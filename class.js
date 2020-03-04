class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Dhaka University"
    }
}

const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "mahiya");
console.log(student1.name, student2.name);
