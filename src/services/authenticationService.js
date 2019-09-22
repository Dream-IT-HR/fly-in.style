import api from './_api';
import config from '../config.json';
var jwtDecode = require('jwt-decode');

function GetValidUserFromToken(token) {
    let ret = {
        username: null,
        nickname: null,
        roles: []
    };

    if (token && token !== 'undefined') {
        var decodedToken = jwtDecode(token);

        var dateNow = new Date();
        if (decodedToken.exp > dateNow.getTime() / 1000)
        {
            ret = {
                username: decodedToken["Username"],
                nickname: decodedToken["Nickname"],
                roles: decodedToken["Userroles"]
            };
        }
    }
        
    return ret;
}

async function LoginWithGoogleAsync(options) {
    await api.GetAsync(config.GOOGLE_AUTH_CALLBACK_URL, options)
        .then(login => {
            const token = login.token;
            let loggedInUser = GetValidUserFromToken(token);
            
            SetTokenToLocalStorage(token);
            this.setGlobal({login: loggedInUser});
        })
        .catch(error =>
        {
            console.log(error);
        });
    
        // fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
        // .then(r => {
        //   r.json()
        //     .then(login => {
        //         const token = login.token;
        //         let loggedInUser = GetValidUserFromToken(token);
                
        //         SetTokenToLocalStorage(token);
        //         this.setGlobal({login: loggedInUser});
        //     })
        //     .catch(error =>
        //     {
        //         console.log(error);
        //     });
        // })
        // .catch(error => {
        //     console.log(error);
        // });
}

const localStorage = window.localStorage;

function GetTokenFromLocalStorage() {
    return localStorage.getItem('token');
}

function SetTokenToLocalStorage(token) {
    return localStorage.setItem('token', token);
}

function RemoveTokenFromLocalStorage() {
    return localStorage.removeItem('token');
}

let authenticationService = {
    GetValidUserFromToken,
    LoginWithGoogleAsync,
    GetTokenFromLocalStorage,
    SetTokenToLocalStorage,
    RemoveTokenFromLocalStorage
};

export default authenticationService;