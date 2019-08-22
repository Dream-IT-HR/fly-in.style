import {combineReducers} from 'redux';

import globalReducer from './global/globalReducer';

const appReducer = combineReducers({
    global: globalReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
