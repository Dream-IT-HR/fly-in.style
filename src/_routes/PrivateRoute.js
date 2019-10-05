import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from '../services/authenticationService';

const PrivateRoute = ({component: Component, ...rest}) => {
    let userIsLoggedIn  = authenticationService.IsLoggedIn();
    let isClaimAuthorized = authenticationService.IsClaimAuthorized(rest.claim);
    
    return (
        <Route {...rest} render={props => (
            userIsLoggedIn && isClaimAuthorized
            ?
                <Component {...props} />
            :
            <Redirect to={
                {
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />    
    );
};

export default PrivateRoute;