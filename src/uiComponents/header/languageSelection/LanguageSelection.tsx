'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { TLanguageItem } from './tLanguageSelection';
import { listLanguages, TListLanguages } from '@/const/listLanguages';
import classNames from 'classnames';
import './languageSelection.scss';

const LanguageSelection: React.FC = () => {
    const [activeLanguage, setActiveLanguage] = useState<TListLanguages>(listLanguages.russian);
    const getListLanguages = (): Array<TLanguageItem> => {
        return [
            {
                name: listLanguages.russian,
            },
            {
                name: listLanguages.english,
            },
            {
                name: listLanguages.kazakhstani,
            },
        ];
    };
    return (
        <Box className="language-selection">
            {getListLanguages().map((lang) => {
                const { name } = lang;
                return (
                    <Box
                        className={classNames(
                            'content-container circle-box language-selection__item',
                            { 'language-selection__item_active': name === activeLanguage },
                        )}
                        key={name}
                        onClick={() => {
                            setActiveLanguage(name);
                        }}
                    >
                        <Typography variant="body2" component={'h6'}>
                            {name}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default LanguageSelection;
