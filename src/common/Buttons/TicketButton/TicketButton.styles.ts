import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const TicketButtonWrapper = styled(Button) <any>`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: unset;
    padding: 6px 15px;
    min-width: 90px;
    min-height: 36px;
    text-align: center;
    border-radius: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    color: ${({ variant }) => variant === 'primary'
        ? 'rgb(12, 23, 47)'
        : 'rgb(218, 30, 40)'
    };
    background: ${({ variant }) => variant === 'primary'
        ? 'rgb(243, 243, 245)'
        : 'rgb(251, 232, 233)'
    };
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
`;