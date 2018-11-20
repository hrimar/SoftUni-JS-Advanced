// 1. Пример за closure при IIFE function
let f = (function() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
})();
f();
f()


// 2. МНОГО ИНТЕРЕСЕН И ПОЛЕЗЕН ПРИМЕР - Return object with functions as properties !!!
let commandProcessor = (function() {
    let text = '';
    return {
        append: (newText) => text += newText,
        removeStart: (count) => text = text.slice(count),
        removeEnd: (count) => text = text.slice(0, text.length - count),
        print: () => console.log(text)
    }
})();
commandProcessor.append('test');
commandProcessor.removeStart(1);
commandProcessor.removeEnd(1);
commandProcessor.print();

// 3. ПРИМер за подаване на ф-я с разл бр парам, подадена само с един-два, а останалите взимаща от др. място:
const human = (() => {
    const humanActions = {
        walk: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        }
    }

    const speed = 1;
    const easing = "InOut";

    const result = {};

    Object.keys(humanActions).forEach((key) => {
        result[key] = function () {
            const arr = [speed, easing];

            for(let i = 0; i < arguments.length; i += 1) {
                arr.push(arguments[i]);
            }

            const action = humanActions[key];

            action.apply(null, arr);
        };
    });

    return result;

    // return {
    //     walk: (direction) => { obj.walk(speed, easing, direction); },
    //     run: (direction) => { obj.run(speed, easing, direction); },
    //     climb: (direction, heigth) => { obj.climb(speed, easing, direction, heigth); }
    // };
})();

human.run("Home");
human.climb("Up", 1000);