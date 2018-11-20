function f(input) { // 100/100
    return input.reduce((a, b) => Math.max(a, b));
}

console.log(f([2, 3, 10, 5]));
console.log('');
console.log(f([5, -3, 20, 7, 0.5]));