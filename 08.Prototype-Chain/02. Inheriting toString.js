//function toStringExtension() {   // 100/100 - JUDGE ?????
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className}  (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let baseStr = super.toString().slice(0, -1);
            return `${baseStr}, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
      constructor(name, email, course){
          super(name, email);
          this.course = course;
      }

      toString(){
          let baseStr = super.toString().slice(0, super.toString().length-1);
          return `${baseStr}, course: ${this.course})`;
      }
    }


    let p = new Person("Maria", "maria@gmail.com");
    console.log('' + p);

    let student = new Student('Study', 'st@abv.bg', 'C#');
    console.log(student.toString());

//     return {
//         Person,
//         Teacher,
//         Student
//     };
// }

