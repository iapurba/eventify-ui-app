import { StyledIconButton } from "./MenuButton.styles";

interface MenuButtonProps {
    startIcon?: JSX.Element;
    label?: string;
    endIcon?: JSX.Element;
    active?: boolean;
    onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
    startIcon,
    label,
    endIcon,
    active = false,
    onClick
}) => {
    return (
        <StyledIconButton
            className={`${label && 'labeled'} ${active && 'btn-active'}`}
        >
            {startIcon}
            {label &&
                <div style={{
                    display: 'flex',
                    minHeight: '24px',
                    alignItems: 'center',
                    marginRight: `${endIcon ? '6px' : '0'}`,
                    marginLeft: `${startIcon ? '6px' : '0'}`,
                }}
                >
                    {label}
                </div>
            }
            {endIcon}
        </StyledIconButton>
    );
};

export default MenuButton;