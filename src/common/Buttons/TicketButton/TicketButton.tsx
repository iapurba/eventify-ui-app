import { TicketButtonWrapper } from "./TicketButton.styles";

interface TicketButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean;
}

const TicketButton: React.FC<TicketButtonProps> = ({
    label,
    variant = 'primary',
    onClick,
    disabled = false,
}) => {
    return (
        <TicketButtonWrapper
            variant={variant}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </TicketButtonWrapper>
    );
};

export default TicketButton;