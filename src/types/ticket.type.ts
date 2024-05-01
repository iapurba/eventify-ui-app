export interface TicketType {
    _id: string;
    ticketType: string;
    description: string;
    price: number;
    priceDisplayString: string;
    maxOrderQty: number;
    isAvailable: boolean;
    extraInfo?: string;
};