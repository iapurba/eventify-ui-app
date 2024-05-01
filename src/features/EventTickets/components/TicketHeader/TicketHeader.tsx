import { CustomBullet, EventInfo, EventName, TicketHeaderWrapper } from "./TicketHeader.styles";

const TicketHeader: React.FC = () => {
    return (
        <TicketHeaderWrapper>
            <EventName>{'This is an event'}</EventName>
            <EventInfo>
                {`Sat, 04 May`}
                <CustomBullet> • </CustomBullet>
                {'6:45 PM'}
                <CustomBullet> • </CustomBullet>
                {'Kolkata'}
            </EventInfo>
        </TicketHeaderWrapper>
    );
};

export default TicketHeader;