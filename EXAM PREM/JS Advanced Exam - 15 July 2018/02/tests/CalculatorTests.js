// // Try to use this!!!
// // let expect = require("chai").expect;
// // let assert = require("chai").assert;
// //
// // const Calculator = require('../Calculator');
//
//
// let expect = require("chai").expect;
// let assert = require("chai").assert;
//
// const Calculator = require('./CalculatorTests');
//
// describe('Calculator', function () {        // 70/100
//     let calculator;
//     beforeEach(function () {
//         calculator=new Calculator();
//     });
//
//     it('add should initialize Calculator with empty array', function () {
//         assert.equal(calculator.expenses.length, 0);
//     })
//     // it('add should initialize Calculator with []', function () {
//     //     assert.equal(calculator.expenses, []);              // !
//     // })
//     // it('add should add the given number', function () {
//     //    calculator.add(5);
//     //    calculator.add('pet');
//     //     expect(calculator.expenses).to.equal([5, 'pet']);
//     //     //assert.equal(calculator.expenses.pop(), 5);
//     // })
//
//     // it('add string and numbers', function () {
//     //     calculator.add('Pesho');
//     //     calculator.add(10);
//     //     calculator.add(1.5);
//     //     calculator.add(-10);
//     //     expect(calculator.expenses).to.eql(['Pesho', 10, 1.5, -10]);
//     // });
//     it('add should add the given obj', function () {
//         let obj = {name: 'Asd'}
//         calculator.add(obj);
//         assert.equal(calculator.expenses.pop(), obj);
//     })
//     it('divideNums should gives error if is empty array', function () {
//         assert.throw(function () {
//             calculator.divideNums();
//         });
//     })
//     it('divideNums should divide nums in the array', function () {
//         calculator.expenses = [4, 2]
//         assert.equal(calculator.divideNums(), 2);
//     })
//     it('divideNums should not divide with zero', function () {
//         calculator.expenses = [4, 0]
//         assert.equal(calculator.divideNums(), 'Cannot divide by zero');
//     })
//     it('divideNums should not divide floating point nums', function () {
//         calculator.expenses = [4.5, 3.3]
//         expect(calculator.divideNums()).to.be.closeTo(1.36, 0.01); // only for floating point numbers!
//     })
//     it('divideNums [-5] should return -5', function () {
//         calculator.expenses = [-5]
//         assert.equal(calculator.divideNums(), -5);
//     })
//     it('divideNums [undefined] should return Error', function () {
//         calculator.expenses = [undefined]
//         assert.throw(() =>{
//             calculator.divideNums();
//         }, 'There are no numbers in the array!')
//     })
//
//     it('toString should return correct result', function () {
//         calculator.expenses = [-5, "Pesho", 10]
//         assert.equal(calculator.toString(), '-5 -> Pesho -> 10');
//     })
//     it('toString of [] should return empty array', function () {
//         calculator.expenses = []
//         assert.equal(calculator.toString(), 'empty array');
//     })
//
//     it('orderBy of [] should return empty', function () {
//         calculator.expenses = []
//         assert.equal(calculator.orderBy(), 'empty');
//     })
//     it('orderBy should return correct numbers', function () {
//         calculator.expenses = [1, -5]
//         assert.equal(calculator.orderBy(), '-5, 1');
//     })
//     it('orderBy should return equal numbers', function () {
//         calculator.expenses = [-5, -5]
//         assert.equal(calculator.orderBy(), '-5, -5');
//     })
//     it('orderBy should return correct strings', function () {
//         calculator.expenses = ['Gogo', 'Any']
//         assert.equal(calculator.orderBy(), 'Any, Gogo');
//     })
//     it('orderBy with string and nums should return the strings and nums', function () {
//         calculator.expenses = ['Gogo', 5555, 'Any']
//         assert.equal(calculator.orderBy(), '5555, Any, Gogo');
//     })
//
//
//
//     it('order with mixed types', function () {
//         calculator.add(9);
//         calculator.add(-9.9);
//         calculator.add('Pesho');
//         calculator.add(0);
//         calculator.add({});
//
//         let result = calculator.orderBy();
//         expect(result).to.be.eql(`-9.9, 0, 9, Pesho, [object Object]`)
//     });
//     it('toStringtest with 5 elements', function () {
//         calculator.add('Peshoo');
//         calculator.add({});
//         calculator.add([1, 2, 3]);
//         calculator.add(-1.5);
//         calculator.add(300);
//
//         let result = calculator.toString();
//
//         expect(result).to.be.equal(`Peshoo -> [object Object] -> 1,2,3 -> -1.5 -> 300`);
//     });
//     it('add objects, array', function () {
//         calculator.add([1,2,3]);
//         calculator.add({});
//
//         let result = calculator.expenses;
//         expect(result).to.be.eql([[1,2,3], {}]);
//     });
// })