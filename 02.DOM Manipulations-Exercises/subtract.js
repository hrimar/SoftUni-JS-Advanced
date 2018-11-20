window.onload = function () { // 1. 100/100
    subtract();

    function subtract() {
        let first = document.getElementById('firstNumber').value;
        let second = document.getElementById('secondNumber').value;

        let result = +first - +second;
        document.getElementById('result').textContent = result;
    }
}