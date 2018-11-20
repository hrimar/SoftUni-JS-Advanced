// Write a closure that can create and modify objects.
// All created objects should be kept and be accessible by name.
// You should support the following functionality:
function processCommands(commands) {  // 100/100
    let map = new Map();

    let cmdExecutor = {
        create: function ([objName, inherits, parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(objName, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = map.get(objName), objects = [];
            for (let key in obj) { objects.push(`${key}:${obj[key]}`); }
            console.log(objects.join(', '));
        }

    };
    for (let command of commands) {
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        cmdExecutor[action](commandParameters);
    }
}

processCommands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1', // color:red
    'print c2'] //  model:new, color:red
)