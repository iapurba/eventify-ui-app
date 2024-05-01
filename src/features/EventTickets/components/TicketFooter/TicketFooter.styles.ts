import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const TicketFooterWrapper = styled(Box)`
    background: rgb(255, 255, 255);
    position: sticky;
    bottom: 0px;
    z-index: 2;
    border-top: 0.5px solid rgb(231, 232, 234);
    width: 100%;
`;

export const TicketFooterContent = styled(Box)`
    background: rgb(255, 255, 255);
    padding: 15px;
    max-width: 630px;
    margin: 0px auto;
    -webkit-box-pack: end;
    place-content: space-between flex-end;
    gap: 15px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
`;

export const StyledBox = styled(Box)`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    width: 100%;
`;

export const PriceText = styled(Typography)`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    color: rgb(36, 46, 68);
`;

export const TicketQtyText = styled(Typography)`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 133%;
    color: rgb(122, 124, 130);
`;