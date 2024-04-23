import { Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface EventCardFooterWrapperProps extends BoxProps {
    type?: string;
}

export const EventCardFooterWrapper = styled(Box) <EventCardFooterWrapperProps>`
        display: flex;
        justify-ontent: space-between;
        background: ${({ type }) => (
        type === 'physical' ? '#F5FCFE' : '#FEF3F7'
    )};
        padding: 9px;
        font-weight: bold;
        border-radius: 4px;
        align-items: center;
        width: 100%;
        font-family: "Barlow Condensed", sans-serif;
`;

export const FooterText = styled(Typography)`
    font-family: roboto condensed, sans-serif;
    font-size: 15px;
    font-weight: 520;
    text-transform: uppercase;
`;