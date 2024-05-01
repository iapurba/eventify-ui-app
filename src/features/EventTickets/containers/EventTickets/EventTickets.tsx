import Ticket from "../../components/Ticket/Ticket";
import {
    CustomDivider,
    EventTicketsContainer,
    StyledHeader,
    StyledHeaderContainer
} from "./EventTickets.styles";
import tickets from "../../../../mock/ticket.mockdata";
import { TicketType } from "../../../../types/ticket.type";
import TicketHeader from "../../components/TicketHeader/TicketHeader";
import TicketFooter from "../../components/TicketFooter/TicketFooter";

export const EventTickets: React.FC = () => {

    return (
        <>
            <TicketHeader />
            <EventTicketsContainer>
                <StyledHeaderContainer>
                    <StyledHeader>CHOOSE TICKETS</StyledHeader>
                    <CustomDivider />
                </StyledHeaderContainer>
                {tickets.map((ticket: TicketType, index) => (
                    <Ticket ticketDetails={ticket} />
                ))}
            </EventTicketsContainer>
            <TicketFooter/>
        </>
    );
};

export default EventTickets;