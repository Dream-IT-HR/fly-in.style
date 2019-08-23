import LocaleSwitcher from './_shared components/LocaleSwitcher';
import AppRouter from './AppRouter';
import { connect } from "react-redux";

import React, {Component} from 'react';
// import logo from './logo.svg';
// import {Link, BrowserRouter, Route, withRouter} from 'react-router-dom';
import {Link, withRouter} from 'react-router-dom';
import Translate from 'react-translate-component';
import '../src/_translations/translations';
import Header from './screens/header/Header';

class AppWrapper extends Component {
    state = {
        showApp: false
    }

    render() {
        return (
            <div className="app-wrapper">
               {/* {
                   {(isUiBusy || !showApp) &&
                    <div className="logo-loader">
                        <img src="../images/header-logo.png" />
                    </div>
                    }
               } */}
                <LocaleSwitcher/>
                <Header/>
                <div>
                    <Link className="about-us" to='/about-us'> About us</Link>
                </div>
                <div>
                    {/* <Link className="homepage" to='/'><Translate {...this.props} content={'homepage.title'}/></Link> */}
                    <Link className="homepage" to='/'><Translate content={'homepage.title'}/></Link>
                </div>
                
                <AppRouter/>
            </div>
            
              /* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload. 2
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React 2
                </a>
    
                <Link className="footer__office-address-touch" to='/about-us'><Translate content={'global.getInTouch'}/></Link>
              </header> */
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