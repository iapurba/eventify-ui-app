import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FilterButton from '../../../../common/Buttons/FilterButton/FilterButton';
import { FilterOptionsWrapper, FilterPanelWrapper, ScrollableOptions } from './EventFilterPanel.styles';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../common/Icons/MaterialIcons';
import { CategoryList } from '../../../../types/event.type';

interface EventFilterPanelProps {
    headerTitleCount: any;
    timeOptions: string[]
    genreList: CategoryList[];
    onFilter: (timeIdx: number, genreIdx: number) => void;
}

const EventFilterPanel: React.FC<EventFilterPanelProps> = ({
    headerTitleCount,
    timeOptions,
    genreList,
    onFilter,
}) => {
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [scrollEnd, setScrollEnd] = useState<boolean>(false);
    const [timeIndex, setTimeIndex] = useState<number>(0);
    const [genreIndex, setGenreIndex] = useState<number>(0);

    const handleScroll = (direction: 'left' | 'right') => {
        const scrollContainer = document.getElementById('scrollable-options');
        if (!scrollContainer) return;
        const scrollAmount = 120;
        const maxScroll = scrollContainer?.scrollWidth - scrollContainer?.clientWidth;
        const newScrollLeft =
            direction === 'left'
                ? Math.max(0, scrollLeft - scrollAmount)
                : Math.min(maxScroll, scrollLeft + scrollAmount);

        maxScroll === newScrollLeft ? setScrollEnd(true) : setScrollEnd(false);
        setScrollLeft(newScrollLeft);

        if (scrollContainer) {
            scrollContainer.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        console.log(scrollEnd);
    }, [scrollEnd]);


    return (
        <FilterPanelWrapper className='event-filter-panel'>
            <Typography pb={2} sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#00B9F5',
                fontVariant: 'h5',
            }}>
                {`${headerTitleCount?.title} `}
                <span style={{ color: '#000000', fontWeight: '320' }}>
                    {`(${headerTitleCount?.count})`}
                </span>
            </Typography>
            <FilterOptionsWrapper>
                <Typography sx={{ color: '#999999', fontSize: '14px' }}>TIME:</Typography>
                {timeOptions.map((item, index) => (
                    <FilterButton
                        key={item}
                        label={item}
                        active={index === timeIndex ? true : false}
                        onClick={() => {
                            onFilter(index, genreIndex);
                            setTimeIndex(index);
                        }}
                    />
                ))}
            </FilterOptionsWrapper>
            <FilterOptionsWrapper>
                {scrollLeft > 0 &&
                    <IconButton disableRipple onClick={() => handleScroll('left')}>
                        <ArrowLeftIcon />
                    </IconButton>
                }
                <ScrollableOptions id="scrollable-options">
                    <Typography sx={{ color: '#999999', fontSize: '14px' }}>GENRE:</Typography>
                    {genreList.map((item, index) => (
                        <FilterButton
                            key={item.value}
                            label={item.label}
                            active={item === genreList[genreIndex] ? true : false}
                            onClick={() => {
                                onFilter(timeIndex, index);
                                setGenreIndex(index);
                            }}
                        />
                    ))}
                </ScrollableOptions>
                {!scrollEnd &&
                    <IconButton
                        sx={{ padding: 0 }}
                        disableRipple
                        onClick={() => handleScroll('right')}
                    >
                        <ArrowRightIcon />
                    </IconButton>
                }
            </FilterOptionsWrapper>
        </FilterPanelWrapper>
    );
};

export default EventFilterPanel;