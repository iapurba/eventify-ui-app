import { ReactNode } from "react";
import { ButtonProps, SxProps } from "@mui/material";
import PrimaryButtonWrapper from "./PrimaryButton.styles";

interface PrimaryButtonProps extends ButtonProps {
    layout: 'blue' | 'pink' | 'dark';
    size?: 'small' | 'medium' | 'large';
    label: string;
    children?: ReactNode;
    onClick?: any;
    sx?: SxProps;
}

const PrimaryButton = ({
    layout,
    children,
    label,
    onClick,
    sx,
    ...props
}: PrimaryButtonProps) => {
    return (
        <PrimaryButtonWrapper
            layout={layout}
            onClick={onClick}
            sx={sx}
            {...props}
        >{label}
        </PrimaryButtonWrapper>
    );
};

export default PrimaryButton;