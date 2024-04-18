import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)(
    ({ className }) => ({
        fontSize: '13px',
        fontWeight: '600',
        padding: `7px ${className?.includes('labeled') && '12px'}`,
        border: `1px solid ${className?.includes('btn-active')
            ? '#31C0F0' 
            : 'rgba(255,255,255,0.2)'}`,
        borderRadius: '100px',
        background: className?.includes('btn-active')
            ? 'rgba(49, 192, 240, .05)' 
            : 'transparent',
        color: 'white',
        marginLeft: '15px',
        '&:hover': {
            borderColor: className?.includes('btn-active')
                ? '#31C0F0' 
                : '#FFFFFF',
            background: className?.includes('btn-active')
                ? 'rgba(49, 192, 240, .05)' 
                : 'transparent',
        },
    })
);
