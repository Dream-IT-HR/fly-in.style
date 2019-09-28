import config from '../config.json';
import authenticationService from './authenticationService';

function GetOptionsWithAuthorizationHeader()
{    
    let token = authenticationService.GetTokenFromLocalStorage();

    let bearer = null;
    let opt = {};

    if (token) {
        bearer = 'Bearer ' + token;    
        opt = {
            headers: {
                'Authorization': bearer
                // 'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                //'Content-Type': 'application/json'
            }};
    }
   
    return opt;
}

async function GetAsync(url) {

    let opt =
    {
        method: "get"
    };

    let authOptions = GetOptionsWithAuthorizationHeader();
    let options = {...authOptions, ...opt };

    return FetchAsync(url, options)
}

async function PostBodyAsync(url, body) {
    let opt =
    {
        method: "post",
        Body: JSON.stringify(body)
    };

    let authOptions = GetOptionsWithAuthorizationHeader();
    let options = {...options, ...authOptions, ...opt };

    return FetchAsync(url, options)
}

async function PostAsync(url, options, forceOverrideOptions = false) {
    let opt =
    {
        method: "post"
    };

    let optionsMerged = {...options, ...opt };;

    let authOptions = GetOptionsWithAuthorizationHeader();

    if (!forceOverrideOptions) {
        optionsMerged = { ...optionsMerged, ...authOptions };
    }
    
    return FetchAsync(url, optionsMerged)
}

async function FetchAsync(url, options) {
    try {
        url = config.BASEURL + url;
        
        let r = await fetch(url, options);

        let unauthorized = 401;
        let notFound = 404;

        if (!r.ok) {
            let statusCode = r.status;
            let message = r.statusText;

            if (r.status === unauthorized) {
                await authenticationService.RefreshLoginAsync();
                
                let authOptions = GetOptionsWithAuthorizationHeader();
                let optionsMerged = {...options, ...authOptions };

                r = await fetch(url, optionsMerged);
                
                if (!r.ok) {
                    message = "Unauthorized";
                }
            }
            else if (r.status === notFound) {
                message = "NotFound";
            }
            if (!r.ok) {
                throw new Error(statusCode + ' - ' + message);
            }
        }

        const json = await r.json();
        
        if (json.error) {
            throw new Error(json.error);
        }

        return json;
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

let api = {
    GetAsync,
    PostAsync,
    PostBodyAsync
};

export default api;