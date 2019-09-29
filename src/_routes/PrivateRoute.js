// import React, {Component} from 'react'
import React, {useGlobal} from 'reactn';
import {Route, Redirect, withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';

const showRoute = (userRoles, routeRoles) => {
    let showRoute = false;
    let publicRoute = !(routeRoles !== null && routeRoles.length > 0);

    if (!publicRoute) {
        if (userRoles && routeRoles) {
            const difference = routeRoles.filter(e => !userRoles.includes(e));
            showRoute = (difference.length !== routeRoles.length);
        }
    } else {
        showRoute = true;
    }
    return showRoute;
};

const PrivateRoute = ({component: Component, ...rest}) => {
    const [login, ] = useGlobal('login');

    return (
        <Route
            {...rest}
            render={props =>
                showRoute(login.roles, rest.roles) ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: props.location}
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}


/*const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAuthenticated: state.user.isAuthenticated
    };
};

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
*/
export default withRouter(PrivateRoute);
