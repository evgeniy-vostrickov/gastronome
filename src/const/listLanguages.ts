export const listLanguages = {
    russian: 'RU',
    english: 'EN',
    kazakhstani: 'KZ',
};

export type TListLanguages = (typeof listLanguages)[keyof typeof listLanguages];
export type TListLanguagesName = typeof listLanguages;
