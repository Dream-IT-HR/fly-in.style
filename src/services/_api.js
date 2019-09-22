async function GetAsync(url, options) {
    try {
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

function PostAsync(url, options) {

}

let api = {
    GetAsync,
    PostAsync
};

export default api;