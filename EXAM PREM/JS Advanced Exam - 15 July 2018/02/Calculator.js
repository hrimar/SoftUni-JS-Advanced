class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

//module.exports=Calculator;  // if you test the above in separate test-file

let expect = require("chai").expect;
let assert = require("chai").assert;

//const Calculator = require('../CalculatorTests');  // if you test the above in separate test-file

describe('Calculator', function () {        // 100/100
    let calculator;
    beforeEach(function () {
        calculator=new Calculator();
    });

    it('add should initialize Calculator with empty array', function () {
               assert.equal(calculator.expenses.length, 0);
    })
    it('add should initialize Calculator with []', function () {
        //assert.equal(calculator.expenses, []);              // ! not work but
        expect(calculator.expenses).to.be.eql([])
    })
    it('add should add the given number', function () {
       calculator.add(5);
       calculator.add('pet');
        expect(calculator.expenses).to.eql([5, 'pet']); // with equal not WORK but with eql YES!!!
        //assert.equal(calculator.expenses.pop(), 5);
    })

    it('add string and numbers', function () {
        calculator.add('Pesho');
        calculator.add([1, 0]);
        calculator.add(1.5);
        calculator.add({});
        expect(calculator.expenses).to.eql(['Pesho', [1, 0], 1.5, {}]);
    });
    it('add should add the given obj', function () {
        let obj = {name: 'Asd'}
        calculator.add(obj);
        assert.equal(calculator.expenses.pop(), obj);
    })
    it('divideNums should gives error if is empty array', function () {
          assert.throw(function () {
              calculator.divideNums();
          });
    })
    it('divideNums should divide nums in the array', function () {
        calculator.expenses = [4, 2]
        assert.equal(calculator.divideNums(), 2);
    })
    it('divideNums should not divide with zero', function () {
        calculator.expenses = [4, 0]
        assert.equal(calculator.divideNums(), 'Cannot divide by zero');
    })
    it('divideNums should not divide floating point nums', function () {
        calculator.expenses = [4.5, 3.3]
             expect(calculator.divideNums()).to.be.closeTo(1.36, 0.01); // only for floating point numbers!
    })
    it('divideNums [-5] should return -5', function () {
        calculator.expenses = [-5]
        assert.equal(calculator.divideNums(), -5);
    })
    it('divideNums [undefined] should return Error', function () {
        calculator.expenses = [undefined]
        assert.throw(() =>{
            calculator.divideNums();
        }, 'There are no numbers in the array!')
    })
    it('divideNums [] should return Error', function () {
        calculator.expenses = []
        assert.throw(() =>{
            calculator.divideNums();
        }, 'There are no numbers in the array!')
    })  ;
    it('divideNums [{}] should return Error', function () {
        calculator.expenses = [{}]
        assert.throw(() =>{
            calculator.divideNums();
        }, 'There are no numbers in the array!')
    })

    it('toString should return correct result', function () {
        calculator.expenses = [-5, "Pesho", 10]
        assert.equal(calculator.toString(), '-5 -> Pesho -> 10');
    })
    it('toString of [] should return empty array', function () {
        calculator.expenses = []
        assert.equal(calculator.toString(), 'empty array');
    })

    it('orderBy of [] should return empty', function () {
        calculator.expenses = []
        assert.equal(calculator.orderBy(), 'empty');
    })
    it('orderBy should return correct numbers', function () {
        calculator.expenses = [1, -5]
        assert.equal(calculator.orderBy(), '-5, 1');
    })
    it('orderBy should return equal numbers', function () {
        calculator.expenses = [-5, -5]
        assert.equal(calculator.orderBy(), '-5, -5');
    })
    it('orderBy should return correct strings', function () {
        calculator.expenses = ['Gogo', 'Any']
        assert.equal(calculator.orderBy(), 'Any, Gogo');
    })
    it('orderBy with string and nums should return the strings and nums', function () {
        calculator.expenses = ['Gogo', 5555, 'Any']
        assert.equal(calculator.orderBy(), '5555, Any, Gogo');
    })


    it('order with mixed types', function () {
        calculator.add(9);
        calculator.add(-9.9);
        calculator.add('Pesho');
        calculator.add(0);
        calculator.add({});

        let result = calculator.orderBy();
        expect(result).to.be.eql(`-9.9, 0, 9, Pesho, [object Object]`)
    });
    it('toStringtest with 5 elements', function () {
        calculator.add('Peshoo');
        calculator.add({});
        calculator.add([1, 2, 3]);
        calculator.add(-1.5);
        calculator.add(300);

        let result = calculator.toString();

        expect(result).to.be.equal(`Peshoo -> [object Object] -> 1,2,3 -> -1.5 -> 300`);
    });
    it('add objects, array', function () {
        calculator.add([1,2,3]);
        calculator.add({});

        let result = calculator.expenses;
        expect(result).to.be.eql([[1,2,3], {}]);
    });
    it('test with one number', function () { // !!! fith this test from 90/100 to 100/100
        calculator.add('Pesho');
        calculator.add({});
        calculator.add(-9.9);
        let result = calculator.divideNums();
        expect(result).to.be.closeTo(-9.9, 0.01);
    });
})