import { FilterMenuButtonProps, FilterButtonWrapper } from './FilterButton.styles';

interface FilterButtonProps extends FilterMenuButtonProps {
    label: string;
}

const FilterButton = ({
    label,
    active = false,
    onClick,
    ...props
}: FilterButtonProps) => {
    return (
        <FilterButtonWrapper
            className='btn btn-filter btn-rounded'
            active={active}
            {...props}
            onClick={onClick}
        >
            {label}
        </FilterButtonWrapper>
    );
};

export default FilterButton;