'use server';
import RoundLogo from './roundLogo/RoundLogo';
import MainNavbar from './mainNavbar/MainNavbar';
import HeaderContacts from './headerContacts/HeaderContacts';
import LanguageSelection from './languageSelection/LanguageSelection';
import { Box } from '@mui/material';
import './header.scss';

const Header: React.FC = async () => {
    return (
        <header>
            <RoundLogo />
            <Box display={'flex'} gap={'20px'}>
                <MainNavbar />
                <HeaderContacts />
            </Box>
            <LanguageSelection />
            <div>Refactor</div>
        </header>
    );
};

export default Header;
