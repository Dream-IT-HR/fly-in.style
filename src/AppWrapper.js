import GlobalErrorBoundary from './_shared components/GlobalErrorBoundary'
import {Switch} from 'react-router-dom';
import AppRouter from './AppRouter';
import React, {setGlobal} from 'reactn';
import {withRouter} from 'react-router-dom';
import '../src/_translations/translations';
import authenticationService from '../src/services/authenticationService';
import Modal from "./_shared components/Modal";
import useModal from './_custom hooks/useModal';
import Header from './screens/header/Header';
import SignUp from './screens/login-screen/SignUp';

authenticationService.ApplyLogin();

const AppWrapper = () => {
    const [isShowing2, toggle] = useModal();
    const [isShowing3, toggle3] = useModal();
    
    return (
         <GlobalErrorBoundary>
            <div className="app-wrapper">
                {/*
                <Header/> 
                <button className="button-default" onClick={toggle}>Show Modal</button>
                <button className="button-default" onClick={toggle3}>Show Modal 3</button>
                */}
                <Switch>
                    <AppRouter/>
                </Switch>
                <Modal isShowing={isShowing2} hide={toggle}>
                    <SignUp/>
                </Modal>
                <Modal
                    isShowing={isShowing3}
                    hide={toggle3}
                />
            </div>
         </GlobalErrorBoundary>
    );
  };

export default withRouter(AppWrapper);