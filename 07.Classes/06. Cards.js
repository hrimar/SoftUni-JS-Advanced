// var.1 - 66/100
const result = (function () {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // PRIVATE!!!

    function Suits() {
    }
    Suits.SPADES = '♠';
    Suits.HEARTS = '♥';
    Suits.DIAMONDS = '♦';
    Suits.CLUBS = '♣';

    class Card {
        constructor(face, suit) {
            this._suit = null;
            this._face = null;

            this.face = face;
            this.suit = suit;
        }

        get suit() {
            return this._suit;
        }

        set suit(val) {
            if (!Object.values(Suits).includes(val)) {
                throw  new Error('Invalid suit.')
            }
            this._suit = val;
        }

        get face() {
            return this.face;
        }

        set face(val) {
            if (!validFaces.includes(val)) {
                throw new Error(`Invalid card face: ${val}`)
            }
            this._face = val;
        }
    }


    return {    // returns the same classes, not theirs instances!!!
        Suits: Suits,
        Card: Card
    }
}())

// var.2
(() => {
        let Suits = {
            CLUBS: "\u2663",
            DIAMONDS: "\u2666",
            HEARTS: "\u2665",
            SPADES: "\u2660"
        };

        let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        class Card{
            constructor(face, suit){
                this.face = face;
                this.suit = suit;
            }

            get face(){
                return this._face;
            }
            set face(face){
                if(! Faces.includes(face)){
                    throw new Error("Invalid card face: " + face);
                }
                this._face = face;
            }

            get suit(){
                return this._suit;
            }
            set suit(suit){
                if(! Object.keys(Suits).map(k => Suits[k]).includes(suit)){
                    throw new Error("Invalid card suit: " + suit);
                }
                this._suit = suit;
            }

            toString(){
                return `${this.face}${this.suit}`;
            }
        }
        return {Suits, Card};
    }
)();


let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);


