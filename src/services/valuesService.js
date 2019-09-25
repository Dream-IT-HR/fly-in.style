import api from './_api';

async function GetValuesAsync(options) {
    return await api.FetchAsync('api/values', options)
        .then(values => {
            return values;
        })
        .catch(error =>
        {
            console.log(error);
            throw new Error(error);
        });
    
}

let valuesService = {
    GetValuesAsync
};

export default valuesService;
