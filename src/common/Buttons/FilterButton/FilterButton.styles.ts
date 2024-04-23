import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface FilterMenuButtonProps {
    active: boolean;
    onClick?: () => void;
}

export const FilterButtonWrapper = styled(Button) <FilterMenuButtonProps>`
    border-radius: 100px;
    color: ${({ active }) => (active ? '#FFFFFF' : '#000000')};
    padding: 7px 15px;
    border: ${({ active }) => (
        active ? '#C20000' : '1px solid rgb(153, 153, 153)'
    )};
    font-size: 14px;
    margin-left: 12px;
    text-transform: initial;
    background-color: ${({ active }) => (
        active ? '#C20000' : 'transparent'
    )};
    &:hover {
        border-color: ${({ active }) => (
            active ? '#C20000' : '1px solid rgb(153, 153, 153)'
        )};
        background-color: ${({ active }) => (
            active ? '#C20000' : 'transparent'
        )};
    }
`;