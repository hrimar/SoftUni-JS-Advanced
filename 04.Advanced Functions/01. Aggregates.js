function calcAggregates(arr) {
    console.log("Sum = " + arr.reduce((a,b) => a + b));
    console.log("Min = " + arr.reduce((a,b) => Math.min(a,b)));
    console.log("Max = " + arr.reduce((a,b) => Math.max(a,b)));
    console.log("Product = " + arr.reduce((a,b) => a * b));
    console.log("Join = " + arr.reduce((a,b) => '' + a + b));
}


// function f(input) { // 100/100
//
//     let sum = function (input) {
//         return input.map(e => +e)
//             .reduce((agr, curr) => {
//                 return agr += curr;
//             }, 0);
//     };//
//     let min = input.map(e => +e).reduce((a, b) => Math.min(a, b));
//     let max = input.map(e => +e).reduce((a, b) => Math.max(a, b));
//     let prod = input.map(e => +e).reduce((a, b) => a * b);
//     let join = input.reduce((a, b) => {
//         return a + b
//     }, "");
//
//     console.log(`Sum = ${sum(input)}`);
//     console.log(`Min = ${min}`);
//     console.log(`Max = ${max}`);
//     console.log(`Product = ${prod}`);
//     console.log(`Join = ${join}`);
// }

f([2, 3, 10, 5])
console.log('');
f([5, -3, 20, 7, 0.5])