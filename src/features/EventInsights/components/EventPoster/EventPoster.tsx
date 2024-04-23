import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

interface EventPosterProps {
    imageUrl: string;
}

const EventPoster: React.FC<EventPosterProps> = ({ imageUrl }) => {
    return (
        <Card className='event-poster' sx={{ boxShadow: 'none' }}>
            <CardMedia
                sx={{ height: 450 }}
                image={imageUrl}
            />
        </Card>
    );
};

export default EventPoster;
