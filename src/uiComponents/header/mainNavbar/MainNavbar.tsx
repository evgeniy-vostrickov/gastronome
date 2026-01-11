'use client';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import classNames from 'classnames';
import { TTabItem } from './tMainNavbar';
import './mainNavbar.scss';
import { routes, TListRoutes } from '@/const/listRoutes';

const MainNavbar: React.FC = () => {
    const [isActiveTab, setIsActiveTab] = useState<TListRoutes>(routes.mainPage);
    const getMenuListItems = (): Array<TTabItem> => {
        return [
            {
                name: 'Програмы питания',
                address: routes.nutritionProgram,
            },
            {
                name: 'Бизнес-ланчи',
                address: routes.businessLunch,
            },
            {
                name: 'Gastro Shop',
                address: routes.gastroShop,
            },
            {
                name: 'О нас',
                address: routes.about,
            },
            {
                name: 'Блог',
                address: routes.block,
            },
        ];
    };

    return (
        <nav className="main-navbar__container">
            <Stack className="content-container oval-box main-navbar" direction="row" spacing={5}>
                {getMenuListItems().map((tab) => {
                    const { name, address } = tab;
                    return (
                        <Link
                            className={classNames('main-navbar__item', {
                                'main-navbar__item_active': isActiveTab === address,
                            })}
                            key={address}
                            href={address}
                            onClick={() => setIsActiveTab(address)}
                        >
                            <Typography variant="body2" component={'h6'}>
                                {name}
                            </Typography>
                        </Link>
                    );
                })}
            </Stack>
        </nav>
    );
};

export default MainNavbar;
