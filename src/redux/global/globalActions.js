import * as actions from "./globalConstants"

export function changeTheme(theme) {
    return function (dispatch) {
        dispatch({type: actions.CHANGE_THEME_STARTED});
        return new Promise((resolve, reject) => {
            dispatch({
                type: actions.CHANGE_THEME_FINISHED, 
                payload: 
                {
                    theme: theme
                }
            });
            resolve();
        })
    }
}

export function login(username) {
    return function (dispatch) {
        dispatch({ type: actions.LOGIN_STARTED, payload: { username: username } });

        return new Promise((resolve, reject) => {
            dispatch({ type: actions.LOGIN_FINISHED, payload: { username: username } });

            resolve();
        })
    }
}