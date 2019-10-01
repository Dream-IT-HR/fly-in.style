import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from '../services/authenticationService';
import useApiCall from '../_custom hooks/useApiCall';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [error, loading, data] = useApiCall(authenticationService.IsLoggedInAsync, {}, 0);
    let isLoggedIn = (data ? data : false);

    return (
        <Route {...rest} render={props => (
            isLoggedIn && authenticationService.IsClaimAuthorized(props.claim) 
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