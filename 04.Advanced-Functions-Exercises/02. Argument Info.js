function f() { // 100/100
    let sortedMap = new Map();
    for (let argument of arguments) {
        let type = typeof  argument;
        if (!sortedMap.has(type)) {
            sortedMap.set(type, 0);
        }
        let oldValue = sortedMap.get(type);
        sortedMap.set(type, oldValue + 1);
        console.log(`${type}: ${argument}`)
    }

    // Sort by values in descending order:
    // Array.from(sortedMap.keys()) // [...sortedMap]
    //     .sort((a, b) => sortedMap.get(b) - sortedMap.get(a))
    //     .forEach((key) =>
    //         console.log(`${key} = ${sortedMap.get(key)}`)
    //     )
    // or
    [...sortedMap]
        .sort((a, b) => b[1] - a[1])
        .forEach((key) =>
            console.log(`${key[0]} = ${key[1]}`)
        )
}

f('cat', 42, 15, function () { console.log('Hello world!'); });