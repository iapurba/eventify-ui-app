import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { EventDetailsFooter, EventDetailsWrapper } from './EventDetails.styles';
import IconTextPair from '../../../EventDiscovery/components/IconTextPair/IconTextPair';
import { CalenderIcon, CategoryIcon, LocationIcon, PlayIcon, WalletIcon }
    from '../../../../common/Icons/MuiSvgIcons';
import PrimaryButton from '../../../../common/Buttons/PrimaryButton/PrimaryButton';


interface EventDetailsProps {
    name: string;
    category: string;
    venue: string;
    city: string;
    eventType: string;
    dateTimeString: string;
    priceDisplayString: string;
    onBuyClick: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
    name,
    category,
    venue,
    city,
    eventType,
    dateTimeString,
    priceDisplayString,
    onBuyClick
}) => {
    return (
        <EventDetailsWrapper className='event-details'>
            <Box mb={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {name}
                </Typography>
            </Box>
            <IconTextPair
                textVariant='regular'
                icon={<CategoryIcon />}
                text={category}
            />
            <IconTextPair
                textVariant='regular'
                icon={<CalenderIcon />}
                text={dateTimeString}
            />
            {eventType === 'physical'
                ? <IconTextPair
                    textVariant='regular'
                    icon={<LocationIcon fill='#45474D' />}
                    text={`${venue}, ${city}`}
                />
                : <IconTextPair
                    textVariant='regular'
                    icon={<PlayIcon />}
                    text={'Online'}
                />
            }
            <EventDetailsFooter>
                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <WalletIcon />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19px', ml: 1 }}>
                        {priceDisplayString}
                    </Typography>
                </Box>
                <PrimaryButton
                    layout='pink'
                    label='buy now'
                    onClick={onBuyClick}
                />
            </EventDetailsFooter>
        </EventDetailsWrapper>
    );
}

export default EventDetails;