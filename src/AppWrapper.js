import AppRouter from './AppRouter';
import { connect } from "react-redux";
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../src/_translations/translations';

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