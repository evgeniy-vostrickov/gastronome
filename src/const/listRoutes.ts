export const routes = {
    mainPage: '/',
    nutritionProgram: '/nutrition-program',
    businessLunch: '/business-lunch',
    gastroShop: '/gastro-shop',
    about: '/about',
    block: '/block',
} as const;

export type TListRoutes = (typeof routes)[keyof typeof routes];
export type TListRoutesName = keyof typeof routes;
