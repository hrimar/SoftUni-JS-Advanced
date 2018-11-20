(() => {            // 100/100 BASE !?
        let counter = 0;
        return class Extensible{
            constructor(){
                this.id = counter++;
            }

            extend(template){
                for(let parentProp of Object.keys(template)){
                    if(typeof(template[parentProp]) == "function"){
                        //Object.getPrototypeOf(this)[parentProp] = template[parentProp]; // or
                        Extensible.prototype[parentProp] = template[parentProp];
                    } else {
                        this[parentProp] = template[parentProp];
                    }
                }
            }
        }
    }
)();