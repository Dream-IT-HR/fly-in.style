import PrivateRoute from './_routes/PrivateRoute'
import routes from './_routes/routes';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <div>
            {
                routes.map((route, index) => (
                    route.private ?
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            roles={route.roles}
                            component={route.component}
                        /> :
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                ))
            }
            </div>
        )
    }
}

export default AppRouter;