import { Box } from "@mui/material";
import { PriceText, StyledBox, TicketFooterContent, TicketFooterWrapper, TicketQtyText } from "./TicketFooter.styles";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";

const TicketFooter: React.FC = () => {
    return (
        <TicketFooterWrapper>
            <TicketFooterContent>
                <StyledBox>
                    <Box>
                        <PriceText>₹200</PriceText>
                        <TicketQtyText>1 ticket</TicketQtyText>
                    </Box>
                    <PrimaryButton
                        layout='dark'
                        label={'ADD TO CART'}
                    />
                </StyledBox>
            </TicketFooterContent>
        </TicketFooterWrapper>
    );
};

export default TicketFooter;