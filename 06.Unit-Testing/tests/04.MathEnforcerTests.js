let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

// 100/100
describe('Math enforcer Unit Tests', function () {
    describe('addFive', function () {
        it('with a string(should return undefined)', function () {
            let result = mathEnforcer.addFive('str');
            expect(result).to.be.undefined;
        });
        it('with an object(should return undefined)', function () {
            let result = mathEnforcer.addFive({});
            expect(result).to.be.undefined;
        });
        it('with a positive number(should return number+5)', function () {
            let result = mathEnforcer.addFive(5);
            expect(result).to.be.equal(10);
        });
        it('with a negative number(should return number-5)', function () {
            let result = mathEnforcer.addFive(-5);
            expect(result).to.be.equal(0);
        });
        it('with a floating point number(should return number+5)', function () {
            let result = mathEnforcer.addFive(5.5);
            expect(result).to.be.closeTo(10.5, 0.01); // only for floating point numbers!
        });
    });

    describe('subtractTen', function () {
        it('with a string(should return undefined)', function () {
            let result = mathEnforcer.subtractTen('randomStr');
            expect(result).to.be.undefined;
        });
        it('with an object(should return undefined)', function () {
            let result = mathEnforcer.subtractTen({});
            expect(result).to.be.undefined;
        });
        it('with a positive number(should return number - 10)', function () {
            let result = mathEnforcer.subtractTen(5);
            expect(result).to.be.equal(-5);
        });
        it('with a negative number(should return number - 10)', function () {
            let result = mathEnforcer.subtractTen(-111);
            expect(result).to.be.equal(-121);
        });
        it('with a floating point number(should return number - 10)', function () {
            let result = mathEnforcer.subtractTen(15.14);
            expect(result).to.be.closeTo(5.14, 0.01); // only for floating point numbers!
        });
    });

    describe('sum', function () {
        it('first param is a string(should return undefined)', function () {
            let result = mathEnforcer.sum('randomStr', 10);
            expect(result).to.be.undefined;
        });
        it('second param is a string(should return undefined)', function () {
            let result = mathEnforcer.sum(1111, 'randomStr');
            expect(result).to.be.undefined;
        });
        it('first param is undefined(should return undefined)', function () {
            let result = mathEnforcer.sum(undefined, 10);
            expect(result).to.be.undefined;
        });
        it('second param is a undefined(should return undefined)', function () {
            let result = mathEnforcer.sum(1111, undefined);
            expect(result).to.be.undefined;
        });
        it('with an object(should return undefined)', function () {
            let result = mathEnforcer.sum({}, 555);
            expect(result).to.be.undefined;
        });

        it('with two positive number(should return their sum)', function () {
            let result = mathEnforcer.sum(5, 500);
            expect(result).to.be.equal(505);
        });
        it('with two negative number(should return their sum)', function () {
            let result = mathEnforcer.sum(-111, -100);
            expect(result).to.be.equal(-211);
        });
        it('with a floating point number(should return their sum)', function () {
            let result = mathEnforcer.sum(15.14, 100);
            expect(result).to.be.closeTo(115.14, 0.01); // only for floating point numbers!
        });
        it('with a floating point number and negative number(should return their sum)', function () {
            let result = mathEnforcer.sum(15.14, -100);
            expect(result).to.be.closeTo(- 84.86, 0.01); // only for floating point numbers!
        });
        it('with two floating point number(should return their sum)', function () {
            let result = mathEnforcer.sum(7.41111, 1.21111);
            expect(result).to.be.closeTo(8.62, 0.01); // only for floating point numbers!
        });
    });
});