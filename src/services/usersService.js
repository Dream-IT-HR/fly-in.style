import {setGlobal, getGlobal} from 'reactn';
import api from './_api';
import config from '../config.json';
var jwtDecode = require('jwt-decode');

const Constants = {
    URLS: {
        REGISTER: 'api/Users/register'
    }
}

async function RegisterAsync(data) {
    const userData = JSON.stringify(data);

    const options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: userData,
      mode: 'cors',
      cache: 'default'
    };
  
    await api.PostAsync(Constants.URLS.REGISTER, options);
}

const usersService = {
    RegisterAsync
};

export default usersService;