// var.1 with Model Pattern - 100/100 !
function service(input) {
    let result = [];

    let commands = (function () {
        return {
            add: (str) => result.push(str),
            remove: (str) => result = result.filter(e=>e !== str),
            //{
                // let index = result.indexOf(str); // 75/100
                // return result.splice(index, 1); -> remove only the first element!
            //},
            print: () => console.log(result.join(','))
        }
    })();

    for (let element of input) {
        let args = element.split(' ');
        commands[args[0]](args[1]);
    }
}

// //var.2 with Revealing Model Pattern - 100/100 !
// function service(input) {
//     let commands =(() => {
//         let result = [];
//
//         function add(str) {
//             result.push(str);
//         }
//         function remove(str) {
//             result = result.filter(e=> {
//                 return e !== str;
//             });
//         }
//         function print() {
//             console.log(result.join(','));
//         }
//
//         return { add, remove, print};
//     })();
//
//     input.forEach((el) => {
//         const e = el.split(" ");
//         commands[e[0]](e[1])
//     });
// }

service(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('');
service(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);


// // var.2 with Revealing Model Pattern - Pavel Kolev
// let service =(() => {
//     let result = [];
//
//     function add(str) {
//         result.push(str);
//     }
//     function remove(str) {
//         result = result.filter(e=> {
//             return e !== str;
//         });
//     }
//     function print() {
//         console.log(result.join(','));
//     }
//
//     return { add, remove, print};
// })();
// const input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
//
// input.forEach((el) => {
//     const e = el.split(" ");
//     service[e[0]](e[1])
// });