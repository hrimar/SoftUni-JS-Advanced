function f(arr, typeSort) { // 100/100
    let result = [];
    let sortingType = {
        asc: (arr) => result= arr.sort((a, b) => a-b),
        desc: (arr) => result= arr.sort((a, b) => b-a)
    };

   return sortingType[typeSort](arr);
}

console.log(f([14, 7, 17, 6, 8], 'asc'));
console.log('');
console.log(f([14, 7, 17, 6, 8], 'desc'));