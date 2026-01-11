import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CustomizeThemeProvider from './_theme/CustomizeThemeProvider';
import Header from '@/uiComponents/header/Header';
import '../styles/globals.scss';

export const metadata: Metadata = {
    title: 'Gastronome',
    description: 'Gastronome - магазин здоровой еды',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <CustomizeThemeProvider>
                        <Header />
                        {children}
                    </CustomizeThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
