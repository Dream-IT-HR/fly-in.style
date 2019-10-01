import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from '../services/authenticationService';
import useApiCall from '../_custom hooks/useApiCall';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const [error, loading, data] = useApiCall(authenticationService.IsLoggedInAsync, {}, 0);
    let isLoggedIn = (data ? data : false);
    
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;