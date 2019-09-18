var jwtDecode = require('jwt-decode');

export function GetValidUserFromToken(token) {
    let ret = {
        username: null,
        nickname: null,
        roles: []
    };

    if (token) {
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
