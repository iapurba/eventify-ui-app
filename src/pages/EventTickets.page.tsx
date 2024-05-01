import Box from "@mui/material/Box";
import EventTickets from "../features/EventTickets/containers/EventTickets/EventTickets";

export const EventTicketsPage: React.FC = () => {
    return (
        <Box
            id='event-ticket-page'
            sx={{ background: '#F9F9FA' }}
        >
            <EventTickets />
        </Box>
    );
};

export default EventTicketsPage;