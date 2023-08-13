/* 
1. If the number of purchase of ticket is less than 100, then the price will be 100 Taka per ticket.
2. If the number of purchase of ticket is more than 100 and less then 200, then the first 100 ticket will be 100 Taka per ticket and then rest will be 90 Taka per ticket.
3. If the number of purchase of ticket is more than 200, then the first 100 ticket will be 100 Taka per ticket and the next 100 ticket will be 90 Taka per ticket and the rest of the ticket will be 70 taka per ticket.
*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const ammountOfTicket = 202;
const price = ticketPrice(ammountOfTicket);
console.log('Price', price);