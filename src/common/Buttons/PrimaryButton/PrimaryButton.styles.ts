import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface ButtonColors {
    [key: string]: string;
}

const buttonBackgrounds: ButtonColors = {
    blue: '#29BCFF',
    pink: '#EC1066',
    dark: '#0C172F',
    default: '#29BCFF',
};

const buttonColors: ButtonColors = {
    blue: '#FFFFFF',
    pink: '#FFFFFF',
    dark: '#FCFCFD',
    default: '#FFFFFF',
};

const PrimaryButtonWrapper = styled(Button) <any>`
    font-size: 20px;
    color: ${({ layout }) =>
        buttonColors[layout] || buttonColors['default']};
    font-weight: bold;
    text-align: center;
    padding: 8px 16px;
    max-height: 42px;
    white-space: nowrap;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${({ layout }) =>
        buttonBackgrounds[layout] || buttonBackgrounds['default']};
    fontStretch: condensed;
    font-family: 'Barlow Condensed', sans-serif;
    &:hover {
        background-color: ${({ layout }) =>
        buttonBackgrounds[layout] || buttonBackgrounds['default']};
        color: ${({ layout }) =>
        buttonColors[layout] || buttonColors['default']};
`;

export default PrimaryButtonWrapper;