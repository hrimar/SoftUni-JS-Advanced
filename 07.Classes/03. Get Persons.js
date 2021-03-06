function createPeople() {  // 100 / 100
    class Person {
        constructor(firstName, lastName, age, email) {
            // if (firstName) {
            //     this.firstName = firstName;
            // }
            // if (lastName) {
            //     this.lastName = lastName;
            // }
            // if(age){
            //     this.age = age;
            // }
            // if(email){
            //     this.email = email;
            // }
            [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email];
        };

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    };

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ]
}

const people = createPeople();
people.forEach(p => console.log(p.toString()));