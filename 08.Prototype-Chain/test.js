class Person {
    constructor(name){
        this.name = name;
    }
    work(){
         return ("Person working");
    }
}

class Teacher extends Person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }
    work(){
       //return super.work();
       return ("Teacher working");
    }
}

let person = new Person("Pesho");
person.hey = () => {return "Hey"}
let teacher = new Teacher("Miro", 'DB');
let teacher1 = new Teacher(('Tich', "C#"))
// console.log(Object.getPrototypeOf(person).work());
// console.log(person.__proto__.work());
//console.log(person);

if(teacher1 instanceof Person){
    console.log('is person');
}
if(teacher1.constructor.name === 'Teacher'){
    console.log('But is Teacher');
}
if(teacher1.constructor.name !== 'Person') {
    console.log('But is  not Person');
}

class Nisto{
}
Object.assign(Nisto.prototype, person)

let nisto = new Nisto();

console.log(nisto.hey());