// Object with properties collection and methods for manipulation with the collection!!!
function getSorted() { // 100/100 !!!!

    return {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if(index>=0 && index<this.list.length){
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function(index){
            if(index>=0 && index<this.list.length){
               return this.list[index];
            }
        },
        sort: function(){
            return this.list.sort((a, b) => a-b);
        }
    }
};
let sorted = getSorted();
sorted.add(15);
console.log(sorted);
console.log(sorted.list);
console.log('Size is: ' + sorted.size);