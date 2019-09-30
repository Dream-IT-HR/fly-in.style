import React from 'react';

// Components
import HomepageRoot from '../screens/homepage-screen/HomepageScreen-root';
import About from '../screens/about-screen/AboutScreen';
import Login from '../screens/login-screen/LoginScreen';
// Errors
import Error403 from '../screens/error-screens/Error403';
import Error404 from '../screens/error-screens/Error404';
import Error500 from '../screens/error-screens/Error500';
import ErrorLink from '../screens/error-screens/ErrorLink';

const routes = [
    {
        path: '/',
        exact: true,
        claim: 'homepage.show',
        component: () => <HomepageRoot/>
    },
    {
        path: '/login',
        exact: true,
        restricted: true,
        component: () => <Login/>
    }/*,
    {
        path: '/about-us',
        exact: true,
        claim: 'about-us.show',
        component: () => <About/>
    },
    {
        path: '/403',
        component: () => <Error403/>
    },
    {
        path: '/404',
        component: () => <Error404/>
    },
    {
        path: '/500',
        component: () => <Error500/>
    },
    {
        path: '/link-error',
        component: () => <ErrorLink />
    }*/
];

export default routes;