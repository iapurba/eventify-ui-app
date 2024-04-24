import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const EventGuideWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border: 1px solid rgb(225, 227, 230);
    border-radius: 8px;
    padding: 18px;
    margin-top: 24px;
`;

export const EventGuideItemWrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 28px;
`;

export const EventGuideHeader = styled(Typography)`
    font-weight: bold; 
    font-size: 18px;
    margin-bottom: 8px;
`;


export const StyledText1 = styled(Typography)`
    color: #7A7C82;
    font-size: 14px;
`;

export const StyledText2 = styled(Typography)`
    font-size: 16px;
`;