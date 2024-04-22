import { Card, Typography, styled } from "@mui/material";

export const StyledPrimaryCard = styled(Card)`
    box-shadow: none;
    border: 1px solid #F0F1F2;
    border-radius: 12px;
    cursor: pointer;
    height: 100%;
    &:hover: {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
`;

export const EllipsisTitleText = styled(Typography)`
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    height: 2.8em;
    color: #202226;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Inter, sans-serif;
`;

export const CategoryText = styled(Typography)<any>`
    position: absolute;
    font-size: 12.6px;
    color: #ffffff;
    top: 8px;
    right: 8px;
    background: ${({ type }) => (
        type === 'physical' ? '#31C0F0' : '#EC1066'
    )};
    padding: 6px 8px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
`;