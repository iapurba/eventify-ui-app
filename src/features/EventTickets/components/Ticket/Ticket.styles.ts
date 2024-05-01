import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const TicketWrapper = styled(Box)`
    padding: 15px;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    border: 0.5px solid rgb(231, 232, 234);
    text-align: left;
    width: 100%;
    max-width: 600px;
    margin: 0px;
`;

export const TicketTitle = styled(Typography)`
    font-family: Inter, sans-serif;
    color: rgb(36, 46, 68);
    font-weight: 700;
    font-size: 14px;
`;

export const TicketPrice = styled(Typography)`
    font-family: 'Barlow Condensed', sans-serif;
    color: rgb(36, 46, 68);
    font-weight: 700;
    font-size: 21px;
`;

export const TicketBody = styled(Box)`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: unset;
    gap: 9px;
    margin-top: 9px;
`;

export const TicketDescrption = styled(Typography)`
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: rgb(85, 93, 109);
    margin-top: 9px;
`;

export const StyledDivider = styled(Divider)`
    height: 0.5px;
    width: 100%;
    background: rgb(231, 232, 234);
    border-width: 0px;
`;

export const StyledChip = styled('div')`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: unset;
    border-radius: 9px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: rgb(18, 29, 52);
    margin: 6px 0px;
    padding: 3px 9px;
    width: fit-content;
    background: rgb(251, 232, 233);
`;