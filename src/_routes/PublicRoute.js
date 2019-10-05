import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from '../services/authenticationService';
import useEffectAsync from '../_custom hooks/useEffectAsync';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    let userIsLoggedIn  = authenticationService.IsLoggedIn();

    return (
        
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            userIsLoggedIn && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;