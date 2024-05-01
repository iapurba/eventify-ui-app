import { IconButton, Typography } from "@mui/material";
import { AddIcon, RemoveIcon } from "../../Icons/MuiSvgIcons";
import { CountControlButtonWrapper } from "./CountControlButton.styles";

interface CountControllButtonProps {
    count: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

const CountControlButton: React.FC<CountControllButtonProps> = ({
    count,
    onDecrease,
    onIncrease,
}) => {
    return (
        <CountControlButtonWrapper>
            <IconButton onClick={onDecrease} sx={{padding: 0}}><RemoveIcon/></IconButton>
            <Typography m={'0 4px'}>{count}</Typography>
            <IconButton onClick={onIncrease} sx={{padding: 0}}><AddIcon/></IconButton>
        </CountControlButtonWrapper>
    );
};

export default CountControlButton;