import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Container)`
    padding: 32px 16px;
    max-height: 600px;
`;

export const PageHeaderWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0px auto;
`;

export const PageHeaderText = styled(Typography)`
    font-size: 26px;
    font-weight: bold;
    color: #00B9F5;
    font-variant: h5;
`;