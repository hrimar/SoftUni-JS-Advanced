let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

// 100/100 - test edge cases!
describe('lookupChar Unit Tests', function () {
    describe('No answer', function () {
        it('Input an object(should return undefined)', function () {
            let result = lookupChar({}, 5);
            expect(result).to.be.undefined;
        });
        it('Input floating point number(should return undefined)', function () {
            let result = lookupChar('asdf', 1.5);
            expect(result).to.be.undefined;
        })
    });

    describe('Incorrect index tests', function () {
        it('Input a negative number(should return incorrect index)', function () {
            let result = lookupChar('my string', -5);
            expect(result).to.be.equal('Incorrect index');
        });
        it('Input a bigger index(should return incorrect index)', function () {
            let result = lookupChar('my string', 105);
            expect(result).to.be.equal('Incorrect index');
        })
        it('Input an index equal to string length(should return incorrect index)', function () {
            let result = lookupChar('my string', 9);
            expect(result).to.be.equal('Incorrect index');
        })
    })

    describe('Correct input', function () {
        it('Input correct parameters(should return correct symbol at index)', function () {
            let result = lookupChar('message', 0);
            expect(result).to.be.equal('m');
        });
        it('Input correct parameters(should return correct symbol at index)', function () {
            let result = lookupChar('message', 6);
            expect(result).to.be.equal('e');
        })
    });
})