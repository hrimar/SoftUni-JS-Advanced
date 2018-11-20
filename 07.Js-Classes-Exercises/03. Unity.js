class Rat {         // 100/100
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
       if(otherRat instanceof Rat){     // !!!!
            this.unitedRats.push(otherRat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
       let result=  `${this.name}`;
       if(this.unitedRats.length>0){
           for (let rat of this.unitedRats) {
               result+= `\n##${rat.name}`;
           }
       }
       return result;
    }
}

let rat = new Rat("Pesho");
console.log(rat.toString()); //Pesho

console.log(rat.getRats()); //[]

rat.unite(new Rat("Gosho"));
rat.unite(new Rat("Sasho"));
console.log(rat.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(rat.toString());
// Pesho
// ##Gosho
// ##Sasho
