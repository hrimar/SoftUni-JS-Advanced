let expect = require('chai').expect;
let assert = require('chai').assert;

function sumOfTwoNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}

describe('I am demo test describe', function() {
    it('Sum of two positive numbers', function () {
        expect(sumOfTwoNumbers(15, 30)).to.be.equal(45)
    });
    //or
    it('should return positive number for positive input', function () {
        const input = sumOfTwoNumbers(0, 30);
        assert.equal(input, 30, 'The sum is not correct');
    });
    it('should return negative number for negative input', function () {
        expect(sumOfTwoNumbers(-15, -30)).to.be.equal(-45)
    });

});