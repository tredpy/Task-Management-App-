import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {ProfilePage} from 'pages/ProfilePage';
import {HelpPage} from "pages/HelpPage";
import {NotificationsPage} from "pages/NotificationsPage";

export type AppRoutes = 'main' | 'profile' | 'notifications' | 'help'
export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    profile: '/profile',
    notifications: '/notifications',
    help: '/help'
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    profile: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    notifications: {
        path: RoutePath.notifications,
        element: <NotificationsPage />,
    },
    help: {
        path: RoutePath.help,
        element: <HelpPage />,
    },
};
