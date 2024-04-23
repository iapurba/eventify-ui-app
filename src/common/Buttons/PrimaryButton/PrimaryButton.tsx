import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import PrimaryButtonWrapper from "./PrimaryButton.styles";

interface PrimaryButtonProps extends ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    children?: ReactNode;
    onClick?: any;
}

const PrimaryButton = ({
    primary = true,
    children,
    label,
    onClick,
    ...props
}: PrimaryButtonProps) => {
    return (
        <PrimaryButtonWrapper
            className={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            {...props}
        >{label}
        </PrimaryButtonWrapper>
    );
};

export default PrimaryButton;