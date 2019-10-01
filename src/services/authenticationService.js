import {setGlobal, getGlobal} from 'reactn';
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
                claims: decodedToken["Claims"],
                expires: decodedToken["Expires"],
                expired: false
            };
        }
        else {
            ret = {
                expired: true
            };
        }
    }
        
    return ret;
}

function ApplyLogin()
{
    let userLogin = authenticationService.GetValidUserFromToken(authenticationService.GetTokenFromLocalStorage());

    setGlobal({
        login: {
          username: userLogin.username,
          nickname: userLogin.nickname,
          claims: userLogin.claims,
          expired: userLogin.expired,
          expires: userLogin.expires
        },
    });
}

async function IsLoggedInAsync()
{
    let ret = false;

    let login = getGlobal().login;
    
    if (login.username) {
        ret = true;
    } else if(login.expired) {
        await RefreshLoginAsync();

        login = getGlobal().login;
        
        if (login.username) {
            ret = true;
        }
    }

    return ret;
}

function IsClaimAuthorized(claim) {
    let ret = false;

    let global = getGlobal();

    // check login claims
    ret = true;

    return ret;
}

async function LoginWithGoogleAsync(options) {
    return await api.PostAsync(config.GOOGLE_AUTH_CALLBACK_URL, options)
        .then(login => {
            SetTokenToLocalStorage(login.token);
            SetTokenToLocalStorage(login.refreshToken, authenticationService.Constants.RefreshTokenStorageKey);

            ApplyLogin();
        })
        .catch(error =>
        {
            console.log(error);
            throw new Error(error);
        });
}

function GetOptionsWithRefreshTokenAuthorizationHeader(refreshToken)
{    
    let bearer = null;
    let opt = {};

    if (refreshToken) {
        bearer = 'Bearer ' + refreshToken;
        opt = {
            headers: {
                'Authorization': bearer
            }};
    }
    
    return opt;
}

async function RefreshLoginAsync() {
    let refreshToken = authenticationService.GetTokenFromLocalStorage(authenticationService.Constants.RefreshTokenStorageKey);
                
    if (refreshToken) {
        const options = {
            mode: 'cors',
            cache: 'default',
            callrefreshToken: false
        };

        let authOptions = GetOptionsWithRefreshTokenAuthorizationHeader(refreshToken);

        const mergedOptions = {...options, ...authOptions };

        return await api.PostAsync(config.REFRESH_TOKEN_URL, mergedOptions, true)
            .then(login => {
                SetTokenToLocalStorage(login.token);
                SetTokenToLocalStorage(login.refreshToken, authenticationService.Constants.RefreshTokenStorageKey);

                ApplyLogin();
            })
            .catch(error =>
            {
                console.log(error);
                throw new Error(error);
            });        
    }
}

const localStorage = window.localStorage;

const TokenStorageKey = 'token';
const RefreshTokenStorageKey = 'refreshtoken';

function GetTokenFromLocalStorage(storageKey = TokenStorageKey) {
    let ret = localStorage.getItem(storageKey);
    
    if (ret === 'undefined')
    {
        ret = null;   
    }

    return ret;
}

function SetTokenToLocalStorage(token, storageKey = TokenStorageKey) {
    return localStorage.setItem(storageKey, token);
}

function RemoveTokenFromLocalStorage(storageKey = TokenStorageKey) {
    return localStorage.removeItem(storageKey);
}

let Constants = 
{
    TokenStorageKey,
    RefreshTokenStorageKey
};

let authenticationService = {
    GetValidUserFromToken,
    LoginWithGoogleAsync,
    GetTokenFromLocalStorage,
    SetTokenToLocalStorage,
    RemoveTokenFromLocalStorage,
    RefreshLoginAsync,
    ApplyLogin,
    IsLoggedInAsync,
    IsClaimAuthorized,
    Constants
};

export default authenticationService;