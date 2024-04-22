import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


export const StyledText = styled(Typography)(({ className }) => `
    ${className?.includes('bold') ? `
        font-size: 14px;
        font-family: Inter, sans-serif;
        font-weight: bold;
        color: #45474D;
        margin: 0 8px;
    ` : `
        font-size: 15px;
        font-family: Inter, sans-serif;
        color: #202226;
        margin: 0 8px;
    `}
`);