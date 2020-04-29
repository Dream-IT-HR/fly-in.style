import React from 'reactn';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AOS from 'aos';
// import ReactBreakpoints from 'react-breakpoints'
// import breakpoints from './_helpers/breakpoints';

AOS.init();

ReactDOM.render(
    // <ReactBreakpoints breakpoints={breakpoints}>
        <Provider store={store}>
            <App/>
        </Provider>,
    // </ReactBreakpoints>,
    document.getElementById('root'));
serviceWorker.unregister();
