import { useParams } from "react-router-dom";
import EventInsight from "../features/EventInsights/containers/EventInsight";
import PageBuilder from "../common/PageBuilder/PageBuilder";

const EventInsightPage: React.FC = () => {
    const { slug } = useParams();
    return (
        <PageBuilder id="event-insight-page">
            <EventInsight slug={slug ?? ''} />
        </PageBuilder>
    );
};

export default EventInsightPage;