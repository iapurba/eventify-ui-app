import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../mock/event.mockdata';
import EventDetails from '../components/EventDetails/EventDetails';
import EventGuide from '../components/EventGuide/EventGuide';
import EventPoster from '../components/EventPoster/EventPoster';
import EventOverview from '../components/EventOverview/EventOverview';
import { constants } from '../../../utils/constants';


interface EventInsightProps {
    slug: string;
}

const EventInsight: React.FC<EventInsightProps> = ({ slug }) => {

    const event = eventMockData.filter(e => e.slug === slug)[0];
    const navigate = useNavigate();

    const handleBuyNowClick = () => {
        console.log({ slug })
        navigate(`/event/${slug}/buy/${event._id}/tickets`)
    }

    console.log(event.extraInfo ? 'T' : 'F');

    return (
        <Grid
            container spacing={4}
            className='event-display-container'
        >
            <Grid item sm={12} md={8}>
                <EventPoster imageUrl={constants.event.IMAGE_URL} />
                <EventOverview
                    description={event?.description}
                    terms={event?.terms}
                    faqs={event?.faqs}
                />
            </Grid>
            <Grid item sm={12} md={4}>
                <Grid container direction={'column'}>
                    <Grid item>
                        <EventDetails
                            name={event?.name}
                            category={event?.category}
                            dateTimeString={event?.dateTimeString}
                            venue={event?.venue?.name ?? ''}
                            city={event?.city}
                            eventType={event?.eventType}
                            priceDisplayString={event?.priceDisplayString}
                            onBuyClick={handleBuyNowClick}
                        />
                    </Grid>
                    <Grid item>
                        {event?.extraInfo?.length !== 0 &&
                            <EventGuide extraInfo={event?.extraInfo} />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EventInsight;