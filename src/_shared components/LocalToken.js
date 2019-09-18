const localStorage = window.localStorage;

// class LocalToken {
//     static get() {
//         return localStorage.getItem('token');
//     }

//     static set(token) {
//         return localStorage.setItem('token', token);
//     }

//     static remove() {
//         return localStorage.removeItem('token');
//     }
// }

// export default LocalToken;

function GetTokenFromLocalStorage() {
    return localStorage.getItem('token');
}

function SetTokenToLocalStorage(token) {
    return localStorage.setItem('token', token);
}

function RemoveTokenFromLocalStorage() {
    return localStorage.removeItem('token');
}

let LocalToken = 
{
    GetTokenFromLocalStorage,
    SetTokenToLocalStorage,
    RemoveTokenFromLocalStorage
};

export default LocalToken;