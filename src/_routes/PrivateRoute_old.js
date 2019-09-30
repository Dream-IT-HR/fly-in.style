// // import React, {Component} from 'react'
// import React, {useGlobal} from 'reactn';
// import {Route, Redirect, withRouter} from 'react-router-dom';
// // import {connect} from 'react-redux';

// function IsRouteAuthorized(userRoles, routeRoles, route) {
//     let showRoute = false;
//     let publicRoute = !(routeRoles && routeRoles.length > 0);

//     if (!route.path ==='/') {
//         if (!publicRoute) {
//             if (userRoles && routeRoles) {
//                 const difference = routeRoles.filter(e => !userRoles.includes(e));
//                 showRoute = (difference.length !== routeRoles.length);
//             }
//         } else {
//             showRoute = true;
//         }
//     }
//     return showRoute;
// };

// const PrivateRoute = ({component: Component, ...rest}) => {
//     // const [login, ] = useGlobal('login');
    
//     //let showRoute = IsRouteAuthorized(['admin', 'guest'], ['guest'], rest.route);
//     let showRoute = true;

//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 showRoute ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: '/login',
//                             state: {from: props.location}
//                         }}
//                     />                    
//                 )
//             }
//         />
//     );
// }

// export default withRouter(PrivateRoute);
