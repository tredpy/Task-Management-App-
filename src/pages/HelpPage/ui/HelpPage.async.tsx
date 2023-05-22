import { lazy } from 'react';

export const HelpPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./HelpPage')), 1500);
}));
