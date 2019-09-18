import AppRouter from './AppRouter';
import { connect } from "react-redux";
import React, {Component, setGlobal} from 'reactn';
import {withRouter} from 'react-router-dom';
import '../src/_translations/translations';
import LocalToken from '../src/_shared components/LocalToken';
import * as authService from '../src/services/authService';

setGlobal({
    login: {
      username: authService.GetValidUserFromToken(LocalToken.GetTokenFromLocalStorage()).username,
      roles: authService.GetValidUserFromToken(LocalToken.GetTokenFromLocalStorage()).roles
    }
  });

class AppWrapper extends Component {
    state = {
        showApp: false
    }

    render() {
        return (
            <div className="app-wrapper">
                {/*
                <div>
                    <Link className="about-us" to='/about-us'> About us</Link>
                </div> */}
                {/* <div> */}
                    {/* <Link className="homepage" to='/'><Translate content={'homepage.title'}/></Link> */}
                {/* </div> */}
                <AppRouter/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // settings: state.settings.theme
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setUser: (token) => dispatch(setUser(token)),
        // getStateMachines: () => dispatch(getStateMachines()),
        // placeOrderByKvalue: (param) => dispatch(placeOrderByKvalue(param)),
        // login: (user) => dispatch(login(user)),
        // forgotPassword: (email) => dispatch(forgotPassword(email)),
        // getUserCounts: () => dispatch(getUserCounts())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper));