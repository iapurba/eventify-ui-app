import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const PrimaryButtonWrapper = styled(Button)`
    font-size: 20px;
    color: ${({ className }) => className?.includes('primary')
        ? '#0C172F' : '#FFFFFF'
    };
    font-weight: bold;
    text-align: center;
    padding: 8px 16px;
    max-height: 42px;
    white-space: nowrap;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${({ className }) => (className?.includes('primary')
        ? '#29BCFF' : '#EC1066'
    )};
    fontStretch: condensed;
    font-family: 'Barlow Condensed', sans-serif;
    &:hover {
        background-color: ${({ className }) => (className?.includes('primary')
            ? '#29BCFF' : '#EC1066' 
        )};
        color: ${({ className }) => (className?.includes('primary')
            ? '#0C172F' : '#FFFFFF'
    )};
`;

export default PrimaryButtonWrapper;