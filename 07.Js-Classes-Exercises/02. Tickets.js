function f(arr, sortCriteria) { // 100/100
    let tickets = [];

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = +price;        // 100/100
            this.status = status;
        }
    }

    for (let line  of arr) {
        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

   // let sortedTickets=[];
    // switch(sortCriteria){
    //     case 'destination':
    //         sortedTickets =  tickets.sort((a, b) =>a.destination.localeCompare(b.destination));
    //       break;
    //     case 'price':
    //         sortedTickets = tickets.sort((a, b) =>a.price - b.price);
    //         break;
    //     case 'status':
    //         sortedTickets = tickets.sort((a, b) =>a.status.localeCompare(b.status));
    //         break;
    // }

    let sortedTickets=  tickets.sort((a, b) => a[sortCriteria] > b[sortCriteria]);
    // BUT NOT!!!
    //let sortedTickets=  tickets.sort((a, b) => a.sortCriteria > b.sortCriteria); !!!!!!!!!!!!!

    return sortedTickets;
}

console.log(f(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
