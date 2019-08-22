import * as actions from "./globalConstants"

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.CHANGE_THEME_STARTED: {
            // state = { ...state, isBusy: true };
            break;
        }
        
        case actions.CHANGE_THEME_FINISHED: {
            state = { 
                ...state, 
                settings: {
                    Theme: action.payload.theme
                },
                notification: {
                    message: 'Theme changed to ' + action.payload.theme
                }
            };
            break;
        }

        case actions.CHANGE_THEME_REJECTED: {
            state = { 
                ...state, 
                error: {
                    userMessage: 'Changing themes unsuccessful',
                    data: 'action.payload.error'
                },
                notification: {
                    message: 'Changing themes unsuccessful'
                }
            };
            break;
        }
        
        case actions.LOGIN_STARTED: {
            state = { 
                ...state, 
                user: {
                    firstName:  action.payload.username
                }
            };
            break;
        }
        
        case actions.LOGIN_FINISHED: {
            state = { 
                ...state, 
                notification: {
                    message: 'Login successfull ' + action.payload.username
                }
            };
            break;
        }

        case actions.LOGIN_REJECTED: {
            state = { 
                ...state, 
                notification: {
                    message: 'Login unsuccessfull ' + action.payload.username
                }
            };

            break;
        }
        

        default:
            return state;
    }

    return state;
}
