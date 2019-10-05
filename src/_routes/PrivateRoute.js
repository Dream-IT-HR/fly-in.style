import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from '../services/authenticationService';

const PrivateRoute = ({component: Component, ...rest}) => {
    let [logInInfo, setLogInInfo] = useState(
        {
            loggedInResolved: false,
            userIsLoggedIn: false
        }
    );
    
    useEffect(() => 
    {
        let cancel = false;
        const IsLoggedInAsync = async () => {
            let res = await authenticationService.IsLoggedInAsync();
            
            if (cancel) {
                return;
            }

            setLogInInfo(
                {
                    loggedInResolved: true,
                    userIsLoggedIn: res
                }
            );
        };

        IsLoggedInAsync();

        return () => {
            cancel = true;
          }
    }, []);

    return (
        (logInInfo.loggedInResolved ? 
            <Route {...rest} render={props => (
                logInInfo.userIsLoggedIn && authenticationService.IsClaimAuthorized(rest.claim)
                ?
                    <Component {...props} />
                :
                <Redirect to={
                    {
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            )} />
        : 
        <div/>
        )
    );
};

export default PrivateRoute;