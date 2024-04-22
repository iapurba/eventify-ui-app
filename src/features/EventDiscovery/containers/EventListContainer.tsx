import { useState } from 'react';
import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/PrimaryEventCard';
import { eventMockData } from '../../../mock/event.mockdata';
import { Event } from '../../../types/event.type';
import EventFilterPanel from '../components/EventFilterPanel/EventFilterPanel';
import { generateDistinctCategoryList } from './EventListContainer.helper';

const EventListContainer: React.FC = () => {
    const events = eventMockData;
    const timeOptions = ['All', 'Today', 'Tomorrow', 'Weekend'];
    const genreOptions = [...generateDistinctCategoryList(events)];
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
    const [headerTitleCount, setHeaderTitleCount] = useState<any>({
        title: 'All Events',
        count: filteredEvents.length,
    });

    const handleFilterEvents = (timeIndex: number, genreIndex: number) => {
        let filteredEvents = [...events];

        // Filter events based on genre 
        if (genreIndex) {
            filteredEvents = events.filter(event => (
                event.category === genreOptions[genreIndex]?.value
            ));
        };

        setFilteredEvents(filteredEvents);

        const title = genreIndex
            ? `All ${genreOptions[genreIndex]?.value}`
            : 'All Events'
            
        const count = filteredEvents.length;

        if (timeIndex) {
            setHeaderTitleCount({
                title: `${title} ${timeIndex === 3
                    ? 'This Weekend' : timeOptions[timeIndex]}`,
                count: count
            })
        } else {
            setHeaderTitleCount({ title, count });
        };
    };

    return (
        <>
            <EventFilterPanel
                headerTitleCount={headerTitleCount}
                timeOptions={timeOptions}
                genreList={genreOptions}
                onFilter={handleFilterEvents}
            />
            <Grid container spacing={4} pt={3}>
                {filteredEvents.map((event: Event, index: number) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <div>
                            <PrimaryEventCard
                                name={event.name}
                                dateTimeStr={event.dateTimeString}
                                eventType={event.eventType}
                                venue={event?.venue?.name ?? ''}
                                city={event.city}
                                priceDisplayStr={event.priceDisplayString}
                                category={event.category}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default EventListContainer;
