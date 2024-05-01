import PageBuilder from "../common/PageBuilder/PageBuilder";
import EventListContainer from "../features/EventDiscovery/containers/EventListContainer";

const EventDiscoveryPage: React.FC = () => {
    return (
        <PageBuilder id="event-discovery-page">
            <EventListContainer />
        </PageBuilder>
    );
}

export default EventDiscoveryPage;