let human = {
    name: "Human",
    age: 0,
    gender: 'none',
    toString: function() {
        return `human[${this.name} , age: ${this.age}]`;
    }
};

let pavel = Object.create(human);
pavel.name = "Pavel";
pavel.age = 50;

let miro = Object.create(human);
//miro.name = "Miro";
miro.age = 25;
miro.toString= function(){
    return `My name is: ${this.name}`;
}
// console.log(human);
// console.log(pavel);
// console.log('' + human);
//  console.log('' + pavel);
// console.log('' + miro);
//console.log('' + miro.prototype);
// console.log(pavel.__proto__== human);
// console.log(Object.getPrototypeOf(pavel).name == "Human");

// console.log(human.__proto__);
// console.log(human.prototype);
// console.log(Object.prototype );
// console.log(Object.__proto__);
console.log(miro.name);
miro.name = null;
console.log(miro.name);
