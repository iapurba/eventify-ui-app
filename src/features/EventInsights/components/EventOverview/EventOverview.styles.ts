import { Typography, styled } from '@mui/material';

export const EventOverviewHeader = styled(Typography)`
    border-bottom: 2px solid #0D0F13;
    width: fit-content;
    font-size: 21px;
    font-weight: bold;
    padding: 3px 0;
    margin-top: 24px;
`;

export const BulletMark = styled('span')`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #000000;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
`;