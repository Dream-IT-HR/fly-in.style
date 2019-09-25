import config from '../config.json';

async function FetchAsync(url, options) {
    try {
        url = config.BASEURL + url;
        const r = await fetch(url, options);
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
    FetchAsync
};

export default api;