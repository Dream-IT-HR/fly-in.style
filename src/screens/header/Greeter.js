import { login } from "../../redux/global/globalActions";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import Translate from 'react-translate-component';

class Greeter extends Component {
    componentDidMount() {
        this.props.login('Pero');
    }

    render() {
        return <Translate name={this.props.name} lastname={this.props.name} content="global.greeting" />;
        //return (<div><Translate content="global.greeting" /></div>)
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.global.user.firstName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userName) => dispatch(login(userName)),
        // setUser: (token) => dispatch(setUser(token)),
        // getStateMachines: () => dispatch(getStateMachines()),
        // placeOrderByKvalue: (param) => dispatch(placeOrderByKvalue(param)),
        // login: (user) => dispatch(login(user)),
        // forgotPassword: (email) => dispatch(forgotPassword(email)),
        // getUserCounts: () => dispatch(getUserCounts())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeter));
