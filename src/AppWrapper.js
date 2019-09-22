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
    }
  });

const AppWrapper = () => {
    const {isShowing, toggle} = useModal();

    return (
         <div className="app-wrapper">
            <button className="button-default" onClick={toggle}>Show Modal</button>
             <AppRouter/>
             <Modal
                 isShowing={isShowing}
                 hide={toggle}
             />
         </div>
    );
  };
export default withRouter(AppWrapper);

// function FAppWrapper() {
//     const [isShowing, toggle] = useModal(false);
    
//     return (
//         <div className="app-wrapper">
//             {/*
//             <div>
//                 <Link className="about-us" to='/about-us'> About us</Link>
//             </div> */}
//             {/* <div> */}
//                 {/* <Link className="homepage" to='/'><Translate content={'homepage.title'}/></Link> */}
//             {/* </div> */}
//             <AppRouter/>
        
//             <Modal
//                 isShowing={isShowing}
//                 hide={toggle}
//             />
//         </div>
//     );
// }

// //const AppWrapper = React.memo(FAppWrapper);
// const AppWrapper = FAppWrapper;

// //export default withRouter(AppWrapper);
// export default AppWrapper;


// class AppWrapper2 extends Component {
//     state = {
//         showApp: false
//     }

//     render() {
//         return (
//             <div className="app-wrapper">
//                 {/*
//                 <div>
//                     <Link className="about-us" to='/about-us'> About us</Link>
//                 </div> */}
//                 {/* <div> */}
//                     {/* <Link className="homepage" to='/'><Translate content={'homepage.title'}/></Link> */}
//                 {/* </div> */}
//                 <AppRouter/>
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         // settings: state.settings.theme
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // setUser: (token) => dispatch(setUser(token)),
//         // getStateMachines: () => dispatch(getStateMachines()),
//         // placeOrderByKvalue: (param) => dispatch(placeOrderByKvalue(param)),
//         // login: (user) => dispatch(login(user)),
//         // forgotPassword: (email) => dispatch(forgotPassword(email)),
//         // getUserCounts: () => dispatch(getUserCounts())
//     };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper));