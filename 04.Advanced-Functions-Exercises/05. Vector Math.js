// Func with inner func as their properties returnes as an object:
let solution = (function () {   // 100/100

    function add(vector1, vector2) {
        return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
    }
    function multiply(vector1, scalar) {
        return [vector1[0] * scalar, vector1[1] * scalar];
    }
    function length(vector1) {
        return Math.sqrt(vector1[0] * vector1[0] +vector1[0] * vector1[0]);
    }
    function dot(vector1, vector2) {
        return vector1[0] * vector2[0] + vector1[1] * vector2[1];
    }
    function cross(vector1, vector2) {
        return vector1[0] * vector2[1] - vector1[1] * vector2[0];
    }

    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    };
})();
console.log(solution.add([1, 1], [1, 0]));