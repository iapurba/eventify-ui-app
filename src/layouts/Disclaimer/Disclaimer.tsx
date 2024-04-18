import { Box } from "@mui/material";
import { MovingText } from "./Disclaimer.styles";
import React from "react";

interface DisclaimerProps {
    message: string;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ message }) => {
    return (
        <Box sx={{ background: '#FEDC26', padding: '9px'}}>
            <MovingText variant="body1">{message}</MovingText>
        </Box>
    );
};

export default Disclaimer;