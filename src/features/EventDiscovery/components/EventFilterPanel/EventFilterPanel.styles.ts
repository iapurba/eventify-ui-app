import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FilterPanelWrapper = styled(Box)`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw 0 0;
`;

export const FilterOptionsWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 80%;
`;

export const ScrollableOptions = styled(Box)`
    display: flex;
    align-items: center;
    over-flow-x: auto;
    min-height: 4.25rem;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge */
    };
    & > button {
        white-space: nowrap;
        flex-shrink: 0;
    };
    overflow: hidden; /* Disable keyboard and touchpad scroll */
    -webkit-overflow-scrolling: touch; /* For iOS devices */
`;