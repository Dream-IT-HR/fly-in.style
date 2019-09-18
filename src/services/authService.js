var jwtDecode = require('jwt-decode');

export function GetValidUserFromToken(token) {
    let ret = {
        username: null,
        roles: []
    };

    if (token) {
        var decodedToken = jwtDecode(token);

        var dateNow = new Date();
        if (decodedToken.exp > dateNow.getTime() / 1000)
        {
            ret = {
                username: decodedToken["Username"],
                roles: decodedToken["Userroles"]
            };
        }
    }
        
    return ret;
}
