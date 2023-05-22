import { lazy } from 'react';

export const NotificationsPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./NotificationsPage')), 1500);
}));
