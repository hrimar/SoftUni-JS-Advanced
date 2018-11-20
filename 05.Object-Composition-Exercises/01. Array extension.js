(() => {                        // 100/100
    Array.prototype.last = function ()  {
       let arr = this.valueOf()
        return arr[arr.length-1];
    }
    Array.prototype.skip = function(n) {
        let result=[];
        for (let i = n; i <this.valueOf().length; i++) {
           result.push(this[i]);

        }
        return result;
    }
    Array.prototype.take = function(n) {
        let result=[];
        for (let i = 0; i <n; i++) {
            result.push(this.valueOf()[i]);

        }
        return result;
    }
    Array.prototype.sum = function ()  { // not with () => {...}
        let sum = 0;
        for (let i = 0; i <this.valueOf().length; i++) {
            sum += (this.valueOf()[i]);
        }
        return sum;
    }
    Array.prototype.average = function ()  {
         let arr = this.valueOf();
         return arr.reduce((a, b) => (a+b))/arr.length;
        //return arr.sum()/arr.length;
    }
})()

let arr = [1, 2, 3];
// let res = arr.last();
// console.log(res);
let sl = arr.average();
console.log(sl);