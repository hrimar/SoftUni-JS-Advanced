function f() {    // 100/100
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError("Figure is Abstract class");
            }
            if (this.constructor === Figure) {
                throw new TypeError("Figure is Abstract class");
            }
        }

        toString() {
            return `${this.constructor.name}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure, Circle, Rectangle
    }
}

// BUT how to test the code into teh function?
// How to invoke the classes??????????????????????????????/
// let c = new Circle(5);
// // // // console.log(c.toString());
// // // // console.log(c.area);
//
// let c =  f().new Circle(5);
// console.log(c.toString);
// console.log(c.area);
