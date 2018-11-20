function f(input) { // 100/100 Solve it AGAIN !!!
    let rects = [];

    function createRect(arr) {
        let rect = {
            width: arr[0],
            height: arr[1],
            area: () => rect.width * rect.height,
            compareTo: function (other) {
//sorted by their area in descending and by their width in descending:
                 return other.area() - rect.area() || (other.width - rect.width);
            }
        }
        return rect;
    };

    for (let arr of input) {
        let newObj = createRect(arr);
        rects.push(newObj)
    }
    rects.sort((a, b) => a.compareTo(b));
    return rects;
}

console.log(f([[10, 5], [5, 12]]));