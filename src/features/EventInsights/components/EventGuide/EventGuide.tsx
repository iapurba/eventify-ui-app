import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ExtraInfo } from '../../types/extraInfo.types';
import {
    EventGuideHeader, EventGuideItemWrapper,
    EventGuideWrapper, StyledText1, StyledText2
} from './EventGuide.styles';

interface EventGuideProps {
    extraInfo: ExtraInfo[]
};

const EventGuide: React.FC<EventGuideProps> = ({ extraInfo }) => {
    return (
        <EventGuideWrapper className='event-guide'>
            <EventGuideHeader>Event Guide</EventGuideHeader>
            <Divider />
            {extraInfo?.map((item, index) => (
                <EventGuideItemWrapper
                    key={index}
                    marginTop={index === 0 ? '18px' : 0}
                >
                    <>{console.log(item.imageUrl)}</>
                    <img
                        alt={item.title}
                        src={item.imageUrl}
                        style={{ height: '28px', width: 'auto' }}
                    />
                    <Box ml={3}>
                        <StyledText1>{item.title}</StyledText1>
                        <StyledText2>{item.text}</StyledText2>
                    </Box>
                </EventGuideItemWrapper>
            ))}
        </EventGuideWrapper>
    );
};

export default EventGuide;