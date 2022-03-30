/* Route declarations for the app */

import * as reviews from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/login',
        component: reviews.Login,
        requiresAuth: true,
    },
    {
        id: 'route-002',
        path: '/verify',
        component: reviews.VerifyPin,
        requiresAuth: true,
    },
    {
        id: 'route-003',
        path: '/forgot-password',
        component: reviews.ForgotPassword,
        requiresAuth: false,
    },
    {
        id: 'route-004',
        path: '/set-password',
        component: reviews.SetPassword,
        requiresAuth: false,
    },

    {
        id: 'route-005',
        path: '/queue',
        component: reviews.Queue,
        requiresAuth: false,
    },

    {
        id: 'route-000',
        path: '*',
        component: reviews.NoPageFound,
        requiresAuth: false,
    },
];

export default routData;
