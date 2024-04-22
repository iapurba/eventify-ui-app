import { EventCardFooterWrapper, FooterText } from "./EventCardFooter.styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

interface EventCardFooterProps {
    eventType: string;
    priceDisplayStr: string;
}

const EventCardFooter: React.FC<EventCardFooterProps> = ({
    eventType,
    priceDisplayStr
}) => {
    return (
        <EventCardFooterWrapper type={eventType}>
            <FooterText>{priceDisplayStr}</FooterText>
            <Box sx={{ flexGrow: 1 }} />
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    backgroundColor: (eventType === 'physical')
                        ? '#31C0F0'
                        : '#EC1066',
                    margin: '0 12px'
                }}
            />
            <FooterText>{`BUY NOW`}</FooterText>
        </EventCardFooterWrapper>
    );
}

export default EventCardFooter;