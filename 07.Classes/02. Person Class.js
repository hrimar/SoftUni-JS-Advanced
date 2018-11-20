// var.1 with Class - 100/100
class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    };

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

// var.2 with Function - 100/100
function Person(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
};
Person.prototype.toString = function () {
   return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person.toString());
