'use client';

import { createTheme } from '@mui/material/styles';
import { Comfortaa, Montserrat } from 'next/font/google';
import { ButtonPropsColorOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const comfortaa = Comfortaa({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#64D370',
        },
        secondary: {
            main: '#020202',
            contrastText: '#FFFFFF',
        },
        info: {
            main: '#ffffff',
            contrastText: '#323232',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        body1: {
            fontFamily: comfortaa.style.fontFamily,
        },
        body2: {
            fontFamily: montserrat.style.fontFamily,
        },
        h1: {
            fontSize: '40px',
            fontWeight: '700',
        },
        h2: {
            fontSize: '32px',
            fontWeight: '700',
        },
        h3: {
            fontSize: '20px',
            fontWeight: '400',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 600px)': {
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: '400',
                    borderRadius: 0,
                    height: '48px',
                    '&.Mui-disabled': {
                        '&.MuiButton-colorSecondary': {
                            backgroundColor: '#E1E1E1',
                            color: '#878787',
                        },
                    },
                },
            },
        },
    },
});

export type ButtonPaletteType = OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit',
    ButtonPropsColorOverrides
>;

export default theme;
