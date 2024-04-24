import { useParams } from "react-router-dom";
import EventInsight from "../features/EventInsights/containers/EventInsight"
import { PageContainer } from "../common/PageBuilder/PageBuilder.styles";

const EventInsightPage: React.FC = () => {
    const { slug } = useParams();
    return (
        <PageContainer>
            <EventInsight slug={slug ?? ''} />
        </PageContainer>
    );
};

export default EventInsightPage;