import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Terms from './Terms';
import FAQs from './FAQs';
import {EventOverviewHeader} from './EventOverview.styles';
import { Faq } from '../../../../types/event.type';

interface EventOverviewProps {
    description: string;
    terms?: string[];
    faqs?: Faq[];
};

const EventOverview: React.FC<EventOverviewProps> = ({
    description,
    terms,
    faqs,
}) => {
    return (
        <div className='event-overview'>
            <EventOverviewHeader>About</EventOverviewHeader>
            <Box sx={{ borderBottom: '1px solid rgb(238, 238, 238)' }} />
            <Box pt={2}>
                <Typography dangerouslySetInnerHTML={{ __html: description }} />
                {(faqs && faqs.length > 0) && <FAQs faqs={faqs} />}
                {(terms && terms?.length > 0) && <Terms terms={terms} />}
            </Box>
        </div>
    );
};

export default EventOverview;