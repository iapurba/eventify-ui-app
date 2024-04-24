import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const EventDetailsWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border: 1px solid rgb(225, 227, 230);
    border-radius: 8px;
    padding: 18px
`;

export const EventDetailsFooter = styled(Box)`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    align-items: center;
    width: 100%;
    margin-top: 8px;
`;