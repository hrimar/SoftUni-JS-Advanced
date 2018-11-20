class CheckingAccount {     // 100/100
    constructor(clientId, email, firstName, lastName ){
      this.clientId= clientId;
      this.email= email;
      this.firstName= firstName;
      this.lastName= lastName;
      this.products = [];
    }

    get clientId(){
        return this._cientId;
    }
    set clientId(val){
        if(val.length!== 6){ // or  (!/^\d{6}$/.test(val))
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = val;
    }

    get email(){
        return this._email;
    }
    set email(val){
        if(!/^[a-zA-Z0-9]{1,}@[a-z.]+$/.test(val)){ // to match only this!!
            throw new TypeError('Invalid e-mail');
        }
        this._email = val;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(val){
        if(val.length < 3 || val.length >20){
            throw new TypeError(`First name must be between 3 and 20 characters long`);
        }
        if(!/^[a-zA-Z]{3,20}$/.test(val)){
            throw new TypeError(`First name must contain only Latin characters`);
        }
        this._firstName = val;
    }

    get lastName(){
        return this._firstName;
    }
    set lastName(val){
        if(val.length < 3 || val.length >20){
            throw new TypeError(`Last name must be between 3 and 20 characters long`);
        }
        if(!/^[a-zA-Z]{3,20}$/.test(val)){      // how to ${nameof(this.firstName)} ???
            throw new TypeError(`Last name must contain only Latin characters`);
        }
        this._lastName = val;
    }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
console.log(acc);