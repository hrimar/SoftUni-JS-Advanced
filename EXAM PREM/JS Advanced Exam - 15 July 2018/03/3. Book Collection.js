class BookCollection {      // 100/100
    //1. - сортирането по обект със зададени ключове
    //2. - щом се иска "нещо" -> то `\"${нещо}\"` !!!
    constructor(shelfGenre, room, shelfCapacity) {
        // let rooms = ['livingRoom', 'bedRoom', 'closet',];
        // if (!rooms.includes(room)) {
        //     throw new Error(`Cannot have book shelf in ${this.constructor.name}`);
        // }
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = +shelfCapacity;
        this.shelf = [];
    }

    get room() {
        return this._room
    }

    set room(currentRoom) {
        switch (currentRoom) {
            case'livingRoom':
            case'bedRoom':
            case 'closet':
                this._room = currentRoom;
                break;
            default:
                throw new Error(`Cannot have book shelf in ${currentRoom}`);
        }
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {bookName, bookAuthor, genre}
        // if (genre !== undefined) {
        //     this.shelfGenre = genre;
        // }

        if (this.shelfCondition === 0) {
            this.shelf.shift();
        }

        this.shelf.push(book);


        this.shelf.sort((a, b) => a['bookAuthor'].localeCompare(b['bookAuthor'])); // !!!

            return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter((b) => b.bookName !== bookName)
        // OR
        // this.shelf = this.shelf.filter(function (obj) {
        //     return obj.bookName !== bookName;
        // });
    }

    showBooks(genre) {
        let  books = this.shelf.filter(b =>b.genre == genre);
        // OR
        // let  books = this.shelf.filter(function (obj) {
        //     return obj.genre === genre;
        // });

        let result = `$Results for search \"${genre}\":`
        // for (let book of books) {
        //     result += `\n\uD83D\uDCD6 ${book['bookName']} - ${book['bookAuthor']}`;
        // }
        // OR
        books.forEach(book => result += `\n\uD83D\uDCD6 ${book['bookAuthor']} - \"${book['bookName']}\"`)

        return result;
    }

    get shelfCondition() {          // !!! if it is not get -> 78/100
        return Math.max(0, (this.shelfCapacity - this.shelf.length));
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf"
        } else {
            let result = `\"${this.shelfGenre}\" shelf in ${this.room} contains:`
            for (let book of this.shelf) {
                result += `\n\uD83D\uDCD6 \"${book['bookName']}\" - ${book['bookAuthor']}`;

            }

            return result;
        }
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.shelf);

