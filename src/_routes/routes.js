import React from 'react';

// Components
import HomepageRoot from '../screens/homepage-screen/HomepageScreen-root';
import About from '../screens/about-screen/AboutScreen';
// Errors
import Error403 from '../screens/error-screens/Error403';
import Error404 from '../screens/error-screens/Error404';
import Error500 from '../screens/error-screens/Error500';
import ErrorLink from '../screens/error-screens/ErrorLink';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomepageRoot/>
    },
    {
        path: '/about-us',
        exact: true,
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
    }
];

export default routes;