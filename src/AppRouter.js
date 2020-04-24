import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import PublicRoute from './_routes/PublicRoute';
import PrivateRoute from './_routes/PrivateRoute'

import HomepageRoot from './screens/homepage-screen/HomepageScreen-root';
import Login from './screens/login-screen/LoginScreen';
import About from './screens/about-screen/AboutScreen';
import Demo from './screens/demo-screen/Demo-component';
import Client from './apps/client/Client';
import Admin from "./apps/admin/Admin";

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute component={HomepageRoot} claim="homepage" path="/" exact />
                <PublicRoute restricted={false} component={About} path="/about-us" exact />
                <PublicRoute restricted={true} component={Login} path="/login" exact />
                <PublicRoute restricted={false} component={Demo} path="/demo" exact />
                <PublicRoute restricted={false} component={Client} path="/client" exact />
                <PublicRoute restricted={false} component={Admin} path="/admin" exact />
            </Switch>
            //<div>
            /* {
                routes.map((route, index) => (
                    (route.claim && route.claim !== undefined && route.claim !== null && route.claim.length > 0) ?
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            // exact={route.exact}
                            // roles={route.roles}
                            route={route}
                            component={route.component}
                        /> 
                        :
                        <Route
                            key={index}
                            path={route.path}
                            route={route}
                            component={route.component}
                        />
                ))
            } */
            //</div>
        )
    }
}

export default AppRouter;