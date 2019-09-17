//import jwt from 'jsonwebtoken';
var jwtDecode = require('jwt-decode');

export function UserIsValid(token) {
    if (token) {
        var decodedToken = jwtDecode(token);

        alert('Username: ' + decodedToken["Username"]);
        alert('Roles: ' + decodedToken["Userroles"]);

        var dateNow = new Date();
        if (decodedToken.exp > dateNow.getTime() / 1000) return true;
    }
        
    return false;
}
