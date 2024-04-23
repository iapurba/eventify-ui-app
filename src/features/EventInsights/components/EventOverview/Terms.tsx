import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { BulletMark } from "./EventOverview.styles";


interface TermsProps {
    terms: string[];
}

const Terms: React.FC<TermsProps> = ({ terms }) => {
    return (
        <div className="faqs">
            <Typography sx={{
                variant: 'h6',
                fontWeight: 'bold',
                fontSize: '22px',
                margin: '8px 0',
            }}>
                Terms & Conditions
            </Typography>
            <List>
                {terms?.map((term, i) => (
                    <Typography key={i} sx={{ color: '#373435', mb: '4px' }}>
                        <BulletMark />{` ${term}`}
                    </Typography>
                ))}
            </List>
        </div>
    );
};

export default Terms;