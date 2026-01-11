import { Box, Typography } from '@mui/material';
import './headerContacts.scss';

const HeaderContacts: React.FC = () => {
    return (
        <Box className="content-container oval-box header-contacts">
            <Typography className="header-contacts__phone" variant="body2">
                +38 (068) 949 - 49 -19
            </Typography>
        </Box>
    );
};

export default HeaderContacts;
