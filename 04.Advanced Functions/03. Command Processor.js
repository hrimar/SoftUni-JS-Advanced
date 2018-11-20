
// // Var.1 - with IIFE: 100/100!!!!!!!!!!
function fIIFE(input) {
    let operations = (function () {
        let result = "";
        return {
            append: (str) => result += str,
            removeStart: (n) => result = result.slice(n),
            removeEnd: (n) => result = result.slice(0, result.length - Number(n)),
            print: () => console.log(result)
        }
    })();

    for (let line of input) {
        let [cmd, arg] = line.split(' ');
        operations[cmd](arg);
    }
}
fIIFE(['append hello', 'append again', 'removeStart 3','removeEnd 4', 'print']);

// Var.2 - without IIFE: 100/100 !!!!!!!
function commandProcessor(params) {
    let result = '';
    let commands = {
        append: str => result += str,
        removeStart: n => result = result.slice(Number(n)),
        removeEnd: n => result = result.substr(0, result.length - Number(n)),
        print: () => console.log(result)
    }

    for (const line of params) {
        let [cmd, arg] = line.split(' ');
        commands[cmd](arg);
    }
}
commandProcessor(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);

// function f(input) {
//
//     let calcution = (function () {
//         let result = '';
//         return {
//             append: (str) => result += str,
//             removeStart: (n) => result = result.slice(+n),
//             removeEnd: (n) => result = result.slice(0, result.length - +n),
//             print: () => console.log(result)
//         };
//     })();
//
//     for (let element of input) {
//         let args = element.split(' ')
//         if (args.length > 1) { // NOT NECESSARY!
//             calcution[args[0]](args[1])
//         } else {
//             calcution[args[0]]();
//         }
//     }
// }
// f(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print'])

