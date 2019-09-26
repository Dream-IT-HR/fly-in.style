import AppRouter from './AppRouter';
import React, {setGlobal} from 'reactn';
import {withRouter} from 'react-router-dom';
import '../src/_translations/translations';
import authenticationService from '../src/services/authenticationService';
import Modal from "./_shared components/Modal";
import useModal from './_custom hooks/useModal';

setGlobal({
    login: {
      username: authenticationService.GetValidUserFromToken(authenticationService.GetTokenFromLocalStorage()).username,
      nickname: authenticationService.GetValidUserFromToken(authenticationService.GetTokenFromLocalStorage()).nickname,
      roles: authenticationService.GetValidUserFromToken(authenticationService.GetTokenFromLocalStorage()).roles
    },
  });

const AppWrapper = () => {
    const [isShowing2, toggle] = useModal();
    const [isShowing3, toggle3] = useModal();
    
    return (
         <div className="app-wrapper">
            <button className="button-default" onClick={toggle}>Show Modal</button>
            <button className="button-default" onClick={toggle3}>Show Modal 3</button>
    
             <AppRouter/>
             <Modal
                 isShowing={isShowing2}
                 hide={toggle}
             />
             <Modal
                 isShowing={isShowing3}
                 hide={toggle3}
             />
         </div>
    );
  };

export default withRouter(AppWrapper);