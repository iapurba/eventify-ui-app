import { TicketType } from "../types/ticket.type";

const tickets: TicketType[] = [
    {
      _id: "1",
      ticketType: 'Diamond I Single',
      description: 'Seating on first serve inside the specified rows',
      price: 1500,
      priceDisplayString: '1,500',
      maxOrderQty: 9,
      isAvailable: true,
    },
    {
      _id: "2",
      ticketType: 'Gold I Single',
      description: 'Seating on first serve inside the specified rows',
      price: 1000,
      priceDisplayString: '₹1,000',
      maxOrderQty: 5,
      isAvailable: true,
    },
    {
      _id: "3",
      ticketType: 'Silver I Single',
      description: 'Seating on first serve inside the specified rows',
      price: 750,
      priceDisplayString: '₹750',
      maxOrderQty: 2,
      isAvailable: true,
      extraInfo: 'Few Tickets Left',
    },
    {
      _id: "4",
      ticketType: 'Bronze I Single',
      description: 'Seating on first serve inside the specified rows',
      price: 499,
      priceDisplayString: '₹499',
      maxOrderQty: 3,
      isAvailable: false,
    },
  ];
  
export default tickets;
