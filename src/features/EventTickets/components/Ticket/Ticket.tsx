import { Box } from "@mui/material";
import { CountControlButton } from "../../../../common/Buttons/CountControlButton";
import {
    StyledChip,
    StyledDivider,
    TicketTitle,
    TicketBody,
    TicketDescrption,
    TicketPrice,
    TicketWrapper,
} from "./Ticket.styles";
import { TicketButton } from "../../../../common/Buttons/TicketButton";
import { useState } from "react";


interface TicketProps {
    ticketDetails: {
        ticketType: string;
        description: string;
        price: number;
        priceDisplayString: string;
        maxOrderQty: number;
        isAvailable: boolean;
        extraInfo?: string;
    };
}

export const Ticket: React.FC<TicketProps> = ({
    ticketDetails
}) => {
    const [count, setCount] = useState<number>(0);

    const handleCountClick = (n: number) => {
        if (count >= 0 && count < ticketDetails.maxOrderQty) {
            setCount(count + n);
        }
        if (count === ticketDetails.maxOrderQty && n < 0) {
            setCount(count + n);
        }
    };

    return (
        <TicketWrapper>
            <TicketTitle>{ticketDetails.ticketType}</TicketTitle>
            {ticketDetails.extraInfo &&
                <StyledChip>{ticketDetails.extraInfo}</StyledChip>
            }
            <TicketBody>
                <TicketPrice className="price">
                    {ticketDetails.priceDisplayString}
                </TicketPrice>
                {count > 0 ? (
                    <CountControlButton
                        count={count}
                        onDecrease={() => { handleCountClick(-1) }}
                        onIncrease={() => { handleCountClick(1) }}
                    />
                ) : (
                    <TicketButton
                        label={`${ticketDetails.isAvailable ? 'ADD' : 'SOLD OUT'}`}
                        variant={`${ticketDetails.isAvailable ? 'primary' : 'secondary'}`}
                        onClick={() => { setCount(count + 1) }}
                    />
                )}
            </TicketBody>
            <Box mt={'9px'}>
                <StyledDivider />
                <TicketDescrption>{ticketDetails.description}</TicketDescrption>
            </Box>
        </TicketWrapper>
    );
};

export default Ticket;