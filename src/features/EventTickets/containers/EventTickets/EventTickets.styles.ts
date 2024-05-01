import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const EventTicketsContainer = styled(Box)`
    width: 100%;
    background: rgb(249, 249, 250);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0px;
    gap: 15px;
    padding: 20px 0;
    height: auto;
`;

export const StyledHeaderContainer = styled(Box)`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    margin-top: 15px;
    width: 100%;
    max-width: 620px;
    justify-content: space-between;
`;

export const StyledHeader = styled(Typography)`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    color: rgb(18, 29, 52);
    text-transform: uppercase;
`;

export const CustomDivider = styled('div')`
    height: 0.5px;
    width: 100%;
    background: rgba(18, 29, 52, 0.06);
    border-width: 0px;
    flex: 1 1 0%;
`;