// import React, {Component} from 'react'
import React from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';

const showRoute = (isAuthenticated, userRoles, routeRoles) => {
    let showRoute = false;
    if (!isAuthenticated) {
        if (userRoles && routeRoles) {
            const difference = userRoles.filter(e => !routeRoles.includes(e));
            showRoute = difference.length === 0
        }
    } else {
        showRoute = true;
    }
    return showRoute;
};

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            showRoute(rest.isAuthenticated, rest.user.roles, rest.roles) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

/*const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAuthenticated: state.user.isAuthenticated
    };
};

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
*/
export default withRouter(PrivateRoute);
