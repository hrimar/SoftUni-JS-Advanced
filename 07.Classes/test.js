// var.1:
let baseObj = {
    name: 'Asen',
    age: 55
};

let obj1 = Object.create(baseObj);

let obj2 = Object.create(baseObj);
baseObj.walk = function () {
};

// var.2:
function ObjF(name, age) {
    this.name = name|| 'Filip';
    this.age = age || 100;
};

let objF1 = new ObjF('Misho');
ObjF.prototype.sleep = function () {
}

console.log(ObjF );
console.log(objF1.age);
console.log(objF1.getPrototypeOf()); //????