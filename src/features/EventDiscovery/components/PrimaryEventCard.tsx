import { CardActions, CardContent, CardMedia } from "@mui/material";
import { CategoryText, EllipsisTitleText, StyledPrimaryCard } from "./PrimaryEventCard.styles";
import { constants } from "../../../utils/constants";
import IconTextPair from "./IconTextPair/IconTextPair";
import { CalenderIcon, LocationIcon, PlayIcon } from "../../../common/Icons/MuiSvgIcons";
import EventCardFooter from "./EventCardFooter/EventCardFooter";

interface PrimaryEventCardProps {
    name: string;
    dateTimeStr: string;
    eventType: string;
    venue: string | null;
    city: string;
    priceDisplayStr: string;
    category: string;
}

const PrimaryEventCard: React.FC<PrimaryEventCardProps> = ({
    name,
    dateTimeStr,
    eventType,
    venue,
    city,
    priceDisplayStr,
    category
}) => {
    return (
        <StyledPrimaryCard>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    sx={{ height: 210, width: 'auto' }}
                    image={constants.event.IMAGE_URL}
                />
                <CategoryText type={eventType}>{category}</CategoryText>
            </div>
            <CardContent>
                <EllipsisTitleText gutterBottom>{name}</EllipsisTitleText>
                <IconTextPair
                    icon={<CalenderIcon />}
                    textVariant='bold'
                    text={dateTimeStr}
                />
                {eventType === 'physical' ? (
                    <IconTextPair
                        icon={<LocationIcon fill='#45474D' />}
                        textVariant='bold'
                        text={`${venue}, ${city}`}
                        mb={0}
                    />
                ) : (
                    <IconTextPair
                        icon={<PlayIcon />}
                        textVariant='bold'
                        text={'Online'}
                        mb={0}
                    />
                )}
            </CardContent>
            <CardActions>
                <EventCardFooter
                    eventType={eventType}
                    priceDisplayStr={priceDisplayStr}
                />
            </CardActions>
        </StyledPrimaryCard>
    );
};

export default PrimaryEventCard;