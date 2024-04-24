import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Faq } from "../../../../types/event.type";

interface FAQsProps {
    faqs: Faq[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
    return (
        <div className="faqs">
            <Typography variant='h6' sx={{mb:1, fontWeight:'550', fontStyle: 'italic'}}>
                FAQ's
            </Typography>
            <List>
                {faqs?.map((faq) => (
                    <div key={faq._id} style={{marginBottom: '16px'}}>
                        <Typography sx={{
                            color: '#373435',
                            fontWeight: 'bold',
                        }}>
                            {`Q. ${faq.question}`}
                        </Typography>
                        <Typography sx={{
                            color: '#373435',
                            fontWeight: '400',
                            fontStyle: 'italic'
                        }}>
                            {`A. ${faq.answer}`}
                        </Typography>
                    </div>
                ))}
            </List>
        </div>
    );
};

export default FAQs;