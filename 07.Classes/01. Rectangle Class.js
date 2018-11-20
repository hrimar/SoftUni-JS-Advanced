class Rectangle {       // 100/100
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
       return this.width * this.height;
    }

    static calcA(a, b){
        return a * b;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log('');
console.log(Rectangle.calcA(4, 5));
