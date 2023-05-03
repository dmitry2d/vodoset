import useRequest from './request.js';

const env = import.meta.env;
const prefix = 'VITE_API';
const endpoint = env[prefix + '_ENDPOINT'];
const address = {
    auth: endpoint + env[prefix + '_AUTH'],
    login: endpoint + env[prefix + '_LOGIN'],
    uiMenu: endpoint + env[prefix + '_UIMENU']
}

const auth = useRequest (address.auth, 'GET');
const login = useRequest (address.login, 'POST');

const uiMenu = useRequest (address.uiMenu, 'GET');

export default {
    auth,
    login,
    uiMenu
}