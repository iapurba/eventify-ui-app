import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { StyledText } from './IconTextPair.styles';

interface IconTextPairProps extends BoxProps {
    textVariant: 'bold' | 'regular';
    icon: JSX.Element;
    text: string;
}

const IconTextPair: React.FC<IconTextPairProps> = ({
    textVariant = 'bold',
    icon,
    text,
}) => {
    return (
        <Box display="flex" alignItems="center" mb={1}>
            {icon}
            {textVariant === 'bold'
                ? <StyledText className='bold'>{text}</StyledText>
                : <StyledText className='regular'>{text}</StyledText>
            }
        </Box>
    );
};

export default IconTextPair;