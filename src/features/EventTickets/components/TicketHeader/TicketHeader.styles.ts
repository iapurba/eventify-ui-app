import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const TicketHeaderWrapper = styled(Box)`
    display: flex;
    flex-flow: column wrap;
    position: sticky;
    top: 60px;
    background: white;
    width: 100%;
    padding: 15px;
    z-index: 3;
    text-align: center;
    border-bottom: 0.5px solid rgb(231, 232, 234);
`;

export const EventName = styled(Typography)`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    color: rgb(49, 192, 240);
`;

export const EventInfo = styled(Typography)`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 133%;
    color: rgb(85, 93, 109);
    font-variant: no-contextual;
`;

export const CustomBullet = styled('span')`
    font-size: 14px;
    color: rgb(49, 192, 240);
`;