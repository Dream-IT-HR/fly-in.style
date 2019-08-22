import globalConstants from './constants';

const initialState = {
    global: {
        settings: {
            Theme: globalConstants.ThemeValues.Dark
        },
        user: {
            firstName: null
        },
        error: {
            userMessage: '',
            systemMessage: ''
        },
        notification: {
            message: ''
        }
    }
}

export default initialState;
    