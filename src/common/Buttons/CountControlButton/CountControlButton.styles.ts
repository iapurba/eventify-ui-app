import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CountControlButtonWrapper = styled(Box)`
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: unset;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 6px;
    background: rgb(12, 23, 47);
    height: 32px;
    text-align: center;
    min-width: 90px;
    font-family: 'Barlow Condensed', sans-serif;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;

    &:hover {
        background: rgb(12, 23, 47);
    }
`;